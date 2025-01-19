import { Layout } from '@/components/layout';
import { UploadFile } from '@/components/app/UploadFile';
import { useEffect, useMemo, useState } from 'react';
import BuildTeam from '@/components/app/BuildTeam';
import EmployeeDashboard from '@/components/app/EmployeeDashboard';
import { getCount } from '@/utility/getCount';
import {
  employeeRoleConst,
  employeeStatusConst,
} from '@/constants/appConstants';

const HomeScreen = () => {
  const [file, setFile] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [filter, setFilter] = useState({ role: '', status: '' });
  const [employeeOptions, setEmployeeOption] = useState({});

  const handleModalClose = () => {
    setOpen((prev) => !prev);
  };

  const handleFileUploadSubmit = (file) => {
    setFile(file);
    setOpen(() => false);
  };

  const handleTableFilter = (type, selectedValue) => {
    setFilter((prev) => ({ ...prev, [type]: selectedValue }));
  };

  console.log('file', file);

  useEffect(() => {
    if (file.length === 0) return;
    const { title } = employeeRoleConst || {};
    const roleCount = getCount(title.key, file);
    const statusCount = getCount(employeeStatusConst.title.key, file);

    setEmployeeOption((prev) => ({
      ...prev,
      roleOptions: Object.keys(roleCount),
      statusOptions: Object.keys(statusCount),
    }));
  }, [file]);

  const filteredEmployees = useMemo(() => {
    return file.filter((employee) => {
      const roleMatch = filter.role
        ? employee.Role.toLowerCase().includes(filter.role.toLowerCase())
        : true;
      const statusMatch = filter.status
        ? employee.Status.toLowerCase().includes(filter.status.toLowerCase())
        : true;
      const searchMatch = filter.searchedText
        ? employee.Employee.toLowerCase().includes(
            filter.searchedText.toLowerCase()
          )
        : true;

      return roleMatch && statusMatch && searchMatch;
    });
  }, [file, filter]);

  return (
    <Layout>
      <UploadFile
        isModalOpen={isOpen}
        onModalClose={handleModalClose}
        onSubmit={handleFileUploadSubmit}
      />
      {file?.length === 0 ? (
        <BuildTeam onBulkUploadClick={handleModalClose} />
      ) : (
        <EmployeeDashboard
          employeeOptions={employeeOptions}
          fileData={filteredEmployees}
          onSelectFilter={handleTableFilter}
        />
      )}
    </Layout>
  );
};

export default HomeScreen;
