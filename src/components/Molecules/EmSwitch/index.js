import React from 'react';
import Switch from '@material-ui/core/Switch';
import PropTypes from "prop-types";
import "./index.scss"

const EmSwitch = ({
  name,
  checked,
  color,
  handleChange = () => { },
  inputProps,
  disabled,
  defaultChecked
}) => {

  return (
    <div>
      <Switch
        name={name}
        checked={checked}
        color={color}
        onChange={handleChange}
        inputProps={inputProps}
        disabled={disabled}
        defaultChecked={defaultChecked}
      />
    </div>
  );
}
EmSwitch.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.string,
  color: PropTypes.string,
  handleChange: PropTypes.string,
  inputProps: PropTypes.string,
  disabled: PropTypes.string,
  defaultChecked: PropTypes.string,
};

export default EmSwitch;