import React from 'react';
import PropTypes from "prop-types";
import { Checkbox, FormControlLabel } from '@material-ui/core';
import "./index.scss";

const EmCheckbox = ({
  name,
  color = "primary",
  value,
  label,
  labelPlacement,
  disabled,
  checked = false
}) => {

  return (
    <FormControlLabel
      value={value}
      control={<Checkbox checked={checked} name={name} color={color} />}
      label={label}
      labelPlacement={labelPlacement}
      disabled={disabled}
    />
  );
};

EmCheckbox.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
  labelPlacement: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

export default EmCheckbox;