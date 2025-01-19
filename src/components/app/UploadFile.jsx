import { useRef, useState } from 'react';
import { read, utils } from 'xlsx';
import { ICONS } from '@/assets/url';
// import ExcelIcon from '@/assets/icons/excel.webp';
// import DownloadIcon from '@/assets/icons/download.webp';
// import FolderIcon from '@/assets/icons/folder.webp';

import Modal from '../ui/Modal';
import Text from '../ui/Text';
import { Button, Input } from '../ui';
import Icon from '../ui/Icon';
import { sample_excel } from '@/assets/url';

export const UploadFile = ({ isModalOpen, onModalClose, onSubmit }) => {
  const [fileData, setFileData] = useState([]);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');
  const [dragging, setDragging] = useState(false);

  const downloadFile = async () => {
    let fileUrl = sample_excel;
    try {
      const response = await fetch(fileUrl, {
        method: 'GET',
        headers: {
          // You can add headers if necessary (authentication, etc.)
        },
      });

      if (response.ok) {
        // Get the blob from the response
        const blob = await response.blob();

        // Create a link element to trigger the download
        const link = document.createElement('a');
        const fileName = fileUrl.split('/').pop(); // Get file name from URL
        link.href = URL.createObjectURL(blob);
        link.download = fileName; // Set the filename
        link.click(); // Trigger the download
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
      const fileExtension = file.name.split('.').pop().toLowerCase();
      setFileName(file.name);
      // If it's an xlsx file
      if (fileExtension === 'xlsx') {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const binaryStr = event.target.result;
            const workbook = read(binaryStr, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const data = utils.sheet_to_json(sheet, { header: 1 }); // Get rows as array of arrays
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
          } catch (err) {
            setError('Error reading the file');
          }
        };
        reader.readAsBinaryString(file);
      }
      // If it's a csv file
      else if (fileExtension === 'csv') {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const text = event.target.result;
            const data = utils.csv_to_json(text, { header: 1 }); // Convert CSV to JSON
            setFileData(data); // Save the parsed data
            setError(''); // Reset error message
          } catch (err) {
            setError('Error reading the file');
          }
        };
        reader.readAsText(file);
      }
      // If the file is neither CSV nor XLSX
      else {
        setError('Please upload a valid .xlsx or .csv file');
      }
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
    setFileData(() => []);
    onModalClose();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      setFileName(file.name);
      // If it's an xlsx file
      if (fileExtension === 'xlsx') {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const binaryStr = event.target.result;
            const workbook = read(binaryStr, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const data = utils.sheet_to_json(sheet, { header: 1 }); // Get rows as array of arrays
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
          } catch (err) {
            setError('Error reading the file');
          }
        };
        reader.readAsBinaryString(file);
      }
      // If it's a csv file
      else if (fileExtension === 'csv') {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const text = event.target.result;
            const data = utils.csv_to_json(text, { header: 1 }); // Convert CSV to JSON
            setFileData(data); // Save the parsed data
            setError(''); // Reset error message
          } catch (err) {
            setError('Error reading the file');
          }
        };
        reader.readAsText(file);
      }
      // If the file is neither CSV nor XLSX
      else {
        setError('Please upload a valid .xlsx or .csv file');
      }
    }
  };

  const handleContinue = () => {
    onSubmit(fileData);
  };

  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseClick} title="Upload File">
      <div className="flex flex-col justify-center w-full gap-2">
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
        <div className="w-full h-24 bg-light-gray-100 flex p-4 rounded-xl justify-between items-center">
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
            className="items-center flex justify-around w-40 rounded-xl bg-light-gray-400 border-light-gray-200 border-[1px] px-4 py-2"
            aria-label="Download xlsx button"
            onClick={downloadFile}
          >
            <Icon src={ICONS.DownloadIcon} alt="Download xlsx" />
            <Text className="text-sm text-primary-black font-semibold leading-6 font-quicksand">
              Download XLSX
            </Text>
          </Button>
        </div>
      </div>
      {/* Modal Footer */}
      <div className="flex flex-row gap-4 mt-7 self-end">
        <Button
          className="items-center flex justify-around w-40 rounded-xl bg-light-gray-400 border-light-gray-200 border-[1px] px-4 py-2"
          aria-label="Bulk Upload button"
          onClick={handleCloseClick}
        >
          <Text className="text-base text-dark-gray font-semibold leading-6 font-quicksand">
            Cancel
          </Text>
        </Button>
        <Button
          className="items-center flex justify-around w-44 rounded-xl bg-light-teal border-light-gray-200 border-[1px] px-4 py-2"
          aria-label="Bulk Upload button"
          onClick={handleContinue}
        >
          <Text className="text-base text-white font-semibold leading-6 font-quicksand">
            Continue
          </Text>
        </Button>
      </div>
    </Modal>
  );
};
