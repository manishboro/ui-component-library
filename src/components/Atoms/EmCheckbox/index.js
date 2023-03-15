import React from 'react';
import PropTypes from "prop-types";
import { Checkbox, FormControlLabel } from '@material-ui/core';
import "./index.scss";

const EmCheckbox = ({
  name,
  value,
  label,
  labelPlacement,
  disabled,
  checked = false,
  className,
  isError = false,
}) => {

  return (
    <FormControlLabel
      className={`em-checkbox ${className} ${isError && "error"}`}
      value={value}
      control={<Checkbox checked={checked} name={name} color="primary" />}
      label={label}
      labelPlacement={labelPlacement}
      disabled={disabled}
    />
  );
};

EmCheckbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  labelPlacement: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  isError: PropTypes.bool,
};

export default EmCheckbox;