import React, { useState } from 'react';
import { ICONS } from '@/assets/url';
// import DownIcon from '@/assets/icons/down.webp';
import Icon from './Icon';

const Dropdown = ({
  options,
  onSelect,
  placeholder = 'Select an option',
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle option select
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(name, option); // Pass the `name` and `selectedOption` to the parent
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button for triggering dropdown */}
      <button
        type="button"
        className="inline-flex justify-between items-center w-full rounded-xl border border-light-gray-200 bg-light-gray-400 px-3 py-2 text-sm leading-6 font-semibold text-primary-black shadow-sm hover:bg-gray-50 "
        onClick={toggleDropdown}
      >
        <span>{selectedOption ? selectedOption : placeholder}</span>
        <Icon
          src={ICONS.DownIcon}
          className={`ml-2 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            // className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className="block w-full px-3 py-2 text-sm leading-6 font-semibold text-primary-black  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
