import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle } from 'lucide-react';
import { utils, writeFile } from 'xlsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ICONS } from '@/assets';
import {
  employeeColumnHeader,
  employeeStatusConst,
  employeeTypeConst,
  nationalityConst,
} from '@/constants/appConstants';
import { Icon, Text, Dropdown, Table, Modal, Button, Input } from '../../ui';
import { EmployeeCard } from '../card/EmployeeCard';

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
  // Export selected rows as Excel
  const exportToExcel = () => {
    let idKey = 'Employee ID';
    // Filter the selected rows from the original data
    const selectedData = fileData.filter((row) =>
      selectedRows.includes(row[idKey])
    );

    // Convert the selected data into a format that can be written to Excel
    const ws = utils.json_to_sheet(selectedData);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Selected Data');

    // Create an Excel file and trigger download
    writeFile(wb, 'employee_data.xlsx');
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
      <div className="flex flex-row gap-4 h-52 min-h-52 overflow-x-auto scrollbar-hide lg:overflow-x-clip">
        <div className="w-full lg:w-1/4 min-w-full lg:min-w-[25%]">
          <EmployeeCard cardInfo={nationalityConst} employeeDetail={fileData} />
        </div>
        <div className="w-full lg:w-1/2 min-w-full lg:min-w-[40%]">
          <EmployeeCard
            cardInfo={employeeTypeConst}
            employeeDetail={fileData}
            showProgressBar
          />
        </div>
        <div className="w-full lg:w-1/3 min-w-full lg:min-w-[35%]">
          <EmployeeCard
            semicircle
            cardInfo={employeeStatusConst}
            employeeDetail={fileData}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-start lg:items-center">
        <Text className="w-full lg:w-1/4 font-quicksand font-bold text-xl leading-8 text-dark-gray tracking-tighter">
          All Employees
        </Text>
        <div className="overflow-x-auto lg:overflow-x-hidden scrollbar-hide w-full lg:w-auto flex flex-row gap-5">
          <div className="flex items-center  border-light-gray-200 bg-light-gray-400 rounded-xl px-3 min-w-52 max-w-xs w-full h-9 gap-2">
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
