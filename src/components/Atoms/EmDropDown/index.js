import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "./index.scss";

const EmDropDown = ({
  variant,
  id,
  value,
  handleChange,
  labelId,
  label,
  labelWidth,
  multiple,
  displayEmpty = true,
  size = "small",
  optionList
}) => {
  const DropDownIcon = () => (
    <div className='em-dropdown-icon'>
      <img src='/images/icons/downArrow.svg' width="14" height="7" alt="icon" />
    </div>
  );

  return (
    <FormControl variant={variant} className={`em-dropdown ${size}`}>
      <InputLabel id={labelId} >{label}</InputLabel>
      <Select
        id={id}
        value={value}
        onChange={handleChange}
        label={label}
        labelWidth={labelWidth}
        multiple={multiple}
        displayEmpty={displayEmpty}
        IconComponent={DropDownIcon}
      >
        {optionList.map((list, index) => (
          <MenuItem key={index} value={list.value}>{list.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default EmDropDown;