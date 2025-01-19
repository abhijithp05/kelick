import React, { useState } from 'react';
import Icon from './Icon';
import { ICONS } from '@/assets/url';

const AscendingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-arrow-up"
    viewBox="0 0 16 16"
  >
    <path d="M8 0a1 1 0 0 1 1 1v12.707l3.146-3.147a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L7 13.707V1a1 1 0 0 1 1-1z" />
  </svg>
);

const DescendingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-arrow-down"
    viewBox="0 0 16 16"
  >
    <path d="M8 16a1 1 0 0 1-1-1v-12.707L3.854 7.146a1 1 0 1 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L9 2.293V15a1 1 0 0 1-1 1z" />
  </svg>
);

const Table = ({ columns, data, onRowSelect }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [selectedRows, setSelectedRows] = useState([]);

  // Sorting function
  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return data;

    const sorted = [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [data, sortConfig]);

  // Handle sorting
  const handleSort = (columnKey) => {
    setSortConfig((prevState) => {
      if (prevState.key === columnKey) {
        return {
          ...prevState,
          direction: prevState.direction === 'asc' ? 'desc' : 'asc',
        };
      } else {
        return { key: columnKey, direction: 'asc' };
      }
    });
  };

  // Handle row selection
  const handleRowSelection = (id) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((rowId) => rowId !== id)
        : [...prevSelected, id]
    );
    if (onRowSelect) onRowSelect(id, selectedRows);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-separate table-auto rounded-xl border border-light-gray-200">
        <thead>
          <tr className="light-gray-400 h-14">
            <th className="p-2">
              <input
                type="checkbox"
                checked={selectedRows.length === data.length}
                onChange={() => {
                  if (selectedRows.length === data.length) {
                    setSelectedRows([]);
                  } else {
                    setSelectedRows(data.map((row) => row.id));
                  }
                }}
              />
            </th>
            {columns.map((column) => (
              <th
                key={column.key}
                className="p-2 cursor-pointer "
                onClick={() => handleSort(column.key)}
              >
                <div className="flex items-center justify-between ml-2 mr-4">
                  <span>{column.header}</span>
                  <span className="flex flex-col gap-1">
                    <Icon src={ICONS.UpIcon} width={0.6} height={0.3} />
                    <Icon src={ICONS.DownIcon} width={0.6} height={0.3} />
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.id} className="border-t bg-white h-14">
              <td className="py-2 px-3">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleRowSelection(row.id)}
                />
              </td>
              {columns.map((column) => (
                <td key={column.key} className="py-2 px-3">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
