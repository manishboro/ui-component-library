import React from 'react';
import Switch from '@material-ui/core/Switch';
import PropTypes from "prop-types";
import "./index.scss"
import { FormControlLabel } from '@material-ui/core';

const EmSwitch = ({
  name,
  checked,
  handleChange = () => { },
  disabled,
  label,
  labelPlacement
}) => {

  return (
    <FormControlLabel
      value="bottom"
      control={<Switch
        className='em-switch'
        name={name}
        checked={checked}
        onChange={handleChange}
        color="primary"
        disabled={disabled}
      />}
      label={label}
      labelPlacement={labelPlacement}
    />
  );
}
EmSwitch.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.string,
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelPlacement: PropTypes.string,
};

export default EmSwitch;