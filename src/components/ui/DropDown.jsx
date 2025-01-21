import { ICONS } from '@/assets';
import React, { useState } from 'react';
import { Icon } from '.';

const Dropdown = ({
  options = [],
  onSelect,
  placeholder = 'Select an option',
  name,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Handle option select
  const handleSelect = (event) => {
    const selectedValue = event?.target?.value || '';
    setSelectedOption(selectedValue);
    onSelect(name, selectedValue);
  };

  return (
    <div className="relative inline-block text-left gap-4 w-fit">
      <select
        value={selectedOption || options[0]}
        onChange={handleSelect}
        className="focus:outline-none text-center h-full gap-2 inline-block justify-around items-center min-w-[auto] w-auto rounded-xl border border-light-gray-200 bg-light-gray-400 px-3 py-2 text-sm leading-6 font-semibold text-primary-black shadow-sm hover:bg-gray-50 font-quicksand"
        style={{ whiteSpace: 'nowrap' }} // Prevent text wrapping in options
      >
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
        <Icon src={ICONS.DownIcon} />
      </div> */}
    </div>
  );
};

export default Dropdown;
