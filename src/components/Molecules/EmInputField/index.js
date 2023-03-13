import React from 'react';
import PropTypes from "prop-types";
import { TextField } from '@material-ui/core';
import "./index.scss";

const EmInputField = ({
  id,
  className,
  label,
  type,
  variant = "outlined",
  size,
  placeholder,
  defaultValue,
  disabled = false,
  error = false,
  multiline = false,
  maxRows,
  value,
  handleChange = () => { },
  InputProps,
  InputLabelProps
}) => {

  return (
    <TextField
      id={id}
      className={className}
      label={label}
      type={type}
      variant={variant}
      size={size}
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={disabled}
      error={error}
      multiline={multiline}
      maxRows={maxRows}
      value={value}
      onChange={handleChange}
      InputProps={InputProps}
      InputLabelProps={InputLabelProps}
    />
  );
};

EmInputField.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  multiline: PropTypes.bool,
  maxRows: PropTypes.number,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  InputProps: PropTypes.object,
  InputLabelProps: PropTypes.object,
};

export default EmInputField;