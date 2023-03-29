import React from 'react';
import PropTypes from "prop-types";
import { Box, FormHelperText, TextField } from '@material-ui/core';
import "./index.scss";

const EmInputField = ({
  id,
  className,
  label,
  type,
  variant = "outlined",
  size = "medium",
  placeholder,
  defaultValue,
  disabled = false,
  error = false,
  multiline = false,
  minRows,
  maxRows,
  value,
  onChange = () => { },
  errorText,
  isAnimated,
  fullWidth = true
}) => {

  return (
    <Box className={`em-input ${isAnimated ? 'animated-input' : 'normal-input'} ${size}`}>
      <TextField
        id={id}
        className={className}
        label={label}
        type={type}
        variant={variant}
        placeholder={placeholder}
        fullWidth={fullWidth}
        defaultValue={defaultValue}
        disabled={disabled}
        error={error}
        multiline={multiline}
        minRows={minRows}
        maxRows={maxRows}
        value={value}
        onChange={onChange}
        InputLabelProps={{ shrink: isAnimated }}
      />
      {error && <FormHelperText className='error'>{errorText}</FormHelperText>}
    </Box>
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
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  InputLabelProps: PropTypes.object,
  isAnimated: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default EmInputField;