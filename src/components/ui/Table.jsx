import React, { useState } from 'react';
import Icon from './Icon';
import { ICONS } from '@/assets/url';

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
