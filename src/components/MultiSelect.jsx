import React, { useState } from 'react';
import Select from 'react-select';
import './MultiSelect.css'; // Import the CSS file for styling

// Custom component for the option
const Option = (props) => {
  const { innerProps, innerRef } = props;

  return (
    <div
      className={`option ${props.isSelected ? 'selected' : ''}`}
      {...innerProps}
      ref={innerRef}
    >
      <input type='checkbox' checked={props.isSelected} onChange={() => null} />
      <label>{props.label}</label>
    </div>
  );
};

// Options for the dropdown
const options = [
  { value: 'val1', label: 'Value 1' },
  { value: 'val2', label: 'Value 2' },
  { value: 'val3', label: 'Value 3' },
  { value: 'val4', label: 'Value 4' },
];

// Main component
const MultiSelect = () => {
  const [selected, setSelected] = useState([]);

  // Handle change of the dropdown
  const handleChange = (value) => {
    setSelected(value);
  };

  return (
    <Select
      className='multiselect'
      classNamePrefix='multiselect'
      components={{ Option }}
      isMulti
      options={options}
      value={selected}
      onChange={handleChange}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
    />
  );
};

export default MultiSelect;
