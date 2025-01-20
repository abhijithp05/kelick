import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle } from 'lucide-react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ICONS } from '@/assets/url';
// import SearchIcon from '@/assets/icons/search.webp';
// import DownloadIcon from '@/assets/icons/download.webp';
import { Button, Input } from '../ui';
import Icon from '../ui/Icon';
import Text from '../ui/Text';
import Dropdown from '../ui/DropDown';
import Table from '../ui/Table';
import {
  employeeColumnHeader,
  employeeStatusConst,
  employeeTypeConst,
  nationalityConst,
} from '@/constants/appConstants';
import { EmployeeCard } from './EmployeeCard';
import Modal from '../ui/Modal';

const EmployeeDashboard = ({ fileData, onSelectFilter, employeeOptions }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isSuccessModalOpen, setIsModalOpen] = useState(true);
  const { roleOptions, statusOptions } = employeeOptions || {};

  const handleFilterChange = (name, selectedOption) => {
    onSelectFilter(name, selectedOption);
  };

  const handleSearchEmployee = (e) => {
    const { name, value } = e?.target || {};
    onSelectFilter(name, value);
  };
  // const exportToExcel = () => {
  //   const ws = XLSX.utils.json_to_sheet(fileData); // Convert JSON data to worksheet
  //   const wb = XLSX.utils.book_new(); // Create a new workbook
  //   XLSX.utils.book_append_sheet(wb, ws, 'Employees'); // Append the worksheet to the workbook

  //   // Write workbook to a blob and trigger download
  //   const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  //   const excelFile = new Blob([excelBuffer], {
  //     bookType: 'xlsx',
  //     type: 'application/octet-stream',
  //   });
  //   saveAs(excelFile, 'employees.xlsx');
  // };

  // Export selected rows as Excel
  const exportToExcel = () => {
    let idKey = 'Employee ID';
    // Filter the selected rows from the original data
    const selectedData = fileData.filter((row) =>
      selectedRows.includes(row[idKey])
    );

    // Convert the selected data into a format that can be written to Excel
    const ws = XLSX.utils.json_to_sheet(selectedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Selected Data');

    // Create an Excel file and trigger download
    XLSX.writeFile(wb, 'employee_data.xlsx');
  };

  useEffect(() => {
    if (fileData.length > 0) {
      toast.success(
        <div className="flex items-center space-x-3 ">
          <Icon src={ICONS.TickIcon} className="text-dark-gray text-2xl" />
          <span className="font-quicksand font-semibold text-base leading-6  text-dark-gray">
            Employees successfully added
          </span>
        </div>,
        {
          icon: false,
          closeButton: false,
          className:
            'border border-solid bg-white border-light-gray-200 rounded-lg shadow-lg p-4',
        }
      );
      confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 },
      });
    }
  }, []);

  return (
    <div className="flex flex-col gap-6 h-full w-full p-6">
      <div className="flex flex-row gap-4 h-52 min-h-52">
        <div className="w-1/4">
          <EmployeeCard cardInfo={nationalityConst} employeeDetail={fileData} />
        </div>
        <div className="w-1/2">
          <EmployeeCard
            cardInfo={employeeTypeConst}
            employeeDetail={fileData}
            showProgressBar
          />
        </div>
        <div className="w-1/3">
          <EmployeeCard
            semicircle
            cardInfo={employeeStatusConst}
            employeeDetail={fileData}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <Text className="w-1/4 font-quicksand font-bold text-xl leading-8 text-dark-gray tracking-tighter">
          All Employees
        </Text>
        <div className="w-auto flex flex-row gap-5">
          <div className="flex items-center  border-light-gray-200 bg-light-gray-400 rounded-xl px-3 max-w-xs w-full h-9 gap-2">
            <Icon
              height={1.25}
              width={1.25}
              src={ICONS.SearchIcon}
              className="mr-2 ml-2 "
            />
            <Input
              type="text"
              placeholder="Search employee"
              aria-label="Search employee"
              name="searchedText"
              onChange={handleSearchEmployee}
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
          <Dropdown
            options={roleOptions}
            name="role"
            onSelect={handleFilterChange}
            placeholder="All Role"
          />
          <Dropdown
            options={statusOptions}
            name="status"
            onSelect={handleFilterChange}
            placeholder="All Status"
          />
          <Button
            variant="secondary"
            iconStart={ICONS.DownloadIcon}
            altIcon="Export"
            aria-label="export as excel"
            onClick={exportToExcel}
            className="w-48"
            disabled={selectedRows.length === 0}
          >
            Export
          </Button>
        </div>
      </div>
      {fileData?.length > 0 && (
        <div className="overflow-x-auto">
          <Modal
            isOpen={isSuccessModalOpen}
            onClose={() => setIsModalOpen(false)}
            width="450px"
            height="300px"
          >
            <div className="flex flex-col justify-center w-fit gap-2 self-start">
              {/* Ensure DialogTitle is included */}
              <div>
                {/* Hidden but accessible */}
                <CheckCircle className="text-center text-teal-500 w-12 h-12 mx-auto" />
                <Text
                  tag="h2"
                  className="text-lg text-center font-semibold mt-4"
                >
                  Congrats! You’ve successfully added all your employees!
                </Text>
                <Text tag="h4" className="text-gray-600 mt-2 text-center">
                  Would you like to generate payroll?
                </Text>
              </div>
              <div className="flex justify-center mt-6 space-x-4">
                <Button
                  variant="secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  I’ll do it later
                </Button>
                <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                  Generate Payroll
                </Button>
              </div>
            </div>
          </Modal>
          <Table
            data={fileData}
            columns={employeeColumnHeader}
            selectedRows={selectedRows}
            onSelectRows={setSelectedRows}
          />
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={true}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
            pauseOnFocusLoss={false}
            theme="light"
            className="custom-toast-container"
          />
        </div>
      )}
    </div>
  );
};

export default EmployeeDashboard;
