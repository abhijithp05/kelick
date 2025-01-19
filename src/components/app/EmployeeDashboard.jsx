import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
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

const EmployeeDashboard = ({ fileData, onSelectFilter, employeeOptions }) => {
  const { roleOptions, statusOptions } = employeeOptions || {};

  const handleFilterChange = (name, selectedOption) => {
    onSelectFilter(name, selectedOption);
  };

  const handleSearchEmployee = (e) => {
    const { name, value } = e?.target || {};
    onSelectFilter(name, value);
  };
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(fileData); // Convert JSON data to worksheet
    const wb = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Employees'); // Append the worksheet to the workbook

    // Write workbook to a blob and trigger download
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const excelFile = new Blob([excelBuffer], {
      bookType: 'xlsx',
      type: 'application/octet-stream',
    });

    // Save file using file-saver
    saveAs(excelFile, 'employees.xlsx');
  };
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
        <div className="w-2/3 flex flex-row justify-around">
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
            options={statusOptions}
            name="status"
            onSelect={handleFilterChange} // Single handler
            placeholder="All Status"
          />
          <Dropdown
            options={roleOptions}
            name="role"
            onSelect={handleFilterChange} // Single handler
            placeholder="All Role"
          />
          <Button
            className="items-center flex justify-around w-40 rounded-xl bg-light-gray-400 border-light-gray-200 border-[1px] px-4 py-2"
            aria-label="export as excel"
            onClick={exportToExcel}
          >
            <Icon src={ICONS.DownloadIcon} alt="Export" />
            <Text className="text-base text-dark-gray font-semibold leading-6 font-quicksand">
              Export
            </Text>
          </Button>
          <Button></Button>
        </div>
      </div>
      {fileData?.length > 0 && (
        <div className="overflow-x-auto">
          <Table data={fileData} columns={employeeColumnHeader} />
        </div>
      )}
    </div>
  );
};

export default EmployeeDashboard;
