import { useRef, useState } from 'react';
import { read, utils } from 'xlsx';
import { ICONS } from '@/assets';
import Modal from '../../ui/Modal';
import Text from '../../ui/Text';
import { Button, Input } from '../../ui';
import Icon from '../../ui/Icon';
import { sample_excel } from '@/assets';

const UploadFile = ({ isModalOpen, onModalClose, onSubmit }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [fileData, setFileData] = useState([]);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0); // Progress state
  const [dragging, setDragging] = useState(false);

  const downloadFile = async () => {
    let fileUrl = sample_excel;
    try {
      const response = await fetch(fileUrl, { method: 'GET' });

      if (response.ok) {
        const blob = await response.blob();
        const link = document.createElement('a');
        const fileName = fileUrl.split('/').pop();
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
      } else {
        console.error('Failed to fetch the file');
      }
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false); // Reset dragging state

    const file = event.dataTransfer.files[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleCloseClick = () => {
    setFileName('');
    setFileData([]);
    onModalClose();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      processFile(file);
    }
  };

  // Simulate progress while the file is being uploaded
  const simulateUploadProgress = () => {
    let simulatedProgress = 10;
    const interval = setInterval(() => {
      simulatedProgress += 10; // Increase progress by 10% every 0.5s
      setProgress(() => simulatedProgress);
      if (simulatedProgress >= 100) {
        setIsUploading(false);
        clearInterval(interval);
      }
    }, 200);
  };

  const processFile = (file) => {
    setIsUploading(true); // Start uploading
    setProgress(0); // Reset progress to 0 before starting

    simulateUploadProgress(); // Start simulating upload progress

    const fileExtension = file.name.split('.').pop().toLowerCase();
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        let data;
        if (fileExtension === 'xlsx') {
          const binaryStr = event.target.result;
          const workbook = read(binaryStr, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          data = utils.sheet_to_json(sheet, { header: 1 }); // Get rows as array of arrays
        } else if (fileExtension === 'csv') {
          const text = event.target.result;
          data = utils.csv_to_json(text, { header: 1 }); // Convert CSV to JSON
        }

        const result = data
          .slice(1)
          .filter((row) => row.length > 0)
          .map((row) => {
            const obj = {};
            data[0].forEach((header, index) => {
              obj[header] = row[index];
            });
            return obj;
          });

        setFileData(result); // Save the parsed data
        setError(''); // Reset error message
        setProgress(100); // Set progress to 100 when file is done
      } catch (err) {
        setError('Error reading the file');
        setIsUploading(false); // Set uploading to false if error occurs
        setProgress(0); // Reset progress if error
      }
    };

    if (fileExtension === 'xlsx') {
      reader.readAsBinaryString(file);
    } else if (fileExtension === 'csv') {
      reader.readAsText(file);
    } else {
      setError('Please upload a valid .xlsx or .csv file');
      setIsUploading(false); // Set uploading to false if invalid file
      setProgress(0); // Reset progress if invalid file
    }
  };

  const handleContinue = () => {
    onSubmit(fileData);
  };

  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseClick} title="Upload File">
      <div className="flex flex-col justify-center w-full gap-2">
        {isUploading ? (
          <div className="mt-4 flex flex-col justify-center items-center">
            <div className="w-3/4 h-4 bg-gray-200 rounded-md overflow-hidden">
              <div
                className="h-4 bg-teal-500 rounded-md transition-all duration-100" // Transition duration for smooth effect
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="w-3/4 text-gray-600 text-sm mb-2 self-center">
              Please wait while we upload your file...
            </p>
          </div>
        ) : (
          <div
            className={`w-full h-60 p-4 flex flex-col justify-center items-center border-dashed ${
              error
                ? 'border-red-500'
                : fileName
                ? 'border-light-teal'
                : 'border-light-gray-200'
            } bg-light-gray-400 rounded-2xl border-[2px]`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <Icon src={ICONS.FolderIcon} width={4.5} height={4.5} />
            {fileData.length > 0 ? (
              <div className="w-auto h-7 bg-light-teal py-[2px] px-3 rounded-xl">
                <span className="font-bold font-quicksand text-xs leading-5 text-white">
                  {fileName}
                </span>
              </div>
            ) : (
              <Text className="font-quicksand font-medium text-sm leading-6 text-light-gray text-center">
                Drag and drop your files here <br /> or{' '}
                <Button
                  onClick={handleClick}
                  variant="ghost"
                  className="underline text-light-gray font-quicksand font-bold text-sm leading-6"
                >
                  click to upload
                </Button>
                <Input
                  className="hidden"
                  type="file"
                  accept=".xlsx, .csv"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  id="file-input"
                />
              </Text>
            )}
          </div>
        )}
        <div className="flex w-full justify-between">
          <Text
            className={`font-quicksand font-semibold text-xs leading-5 ${
              error ? 'text-red-500' : 'text-light-gray-300'
            }`}
          >
            Supported formats: XLS, CSV
          </Text>
          <Text
            className={`font-quicksand font-semibold text-xs leading-5 ${
              error ? 'text-red-500' : 'text-light-gray-300'
            }`}
          >
            Maximum file size: 25MB
          </Text>
        </div>
        <div className="w-full h-auto lg:h-24 bg-light-gray-100 flex flex-col lg:flex-row p-4 rounded-xl justify-between items-center">
          <div className="flex flex-row gap-4 items-center">
            <Icon src={ICONS.ExcelIcon} width={2.6} height={2.5} />
            <div className="flex flex-col">
              <Text className="font-quicksand font-bold text-sm leading-6 text-dark-gray">
                Table Example
              </Text>
              <Text className="font-quicksand font-medium text-xs leading-5 text-light-gray-300">
                You can download the attached example <br /> and use them as a
                starting point for your own file.
              </Text>
            </div>
          </div>

          <Button
            variant="secondary"
            size="small"
            iconStart={ICONS.DownloadIcon}
            aria-label="Download xlsx button"
            onClick={downloadFile}
            altIcon="Download xlsx"
          >
            Download XLSX
          </Button>
        </div>
      </div>

      {/* Modal Footer */}
      <div className="flex flex-row gap-4 mt-0 lg:mt-7 self-end">
        <Button
          variant="secondary"
          aria-label="Bulk Upload button"
          onClick={handleCloseClick}
        >
          Cancel
        </Button>
        <Button aria-label="Bulk Upload button" onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};

export default UploadFile;
