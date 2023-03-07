import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "./index.scss";

const EmBreadcrumb = ({
  variant,
  id,
  value,
  handleChange,
  labelId,
  label,
  labelWidth,
  multiple,
  size
}) => {
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
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

export default EmBreadcrumb;