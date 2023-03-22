import React from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel, FormHelperText } from '@material-ui/core';
import './index.scss';

const EmCheckbox = ({ name, value, label, labelPlacement, disabled, errorText, checked = false, isError = false }) => {
  return (
    <Box className={`em-checkbox ${isError && 'error-checkbox'}`}>
      <FormControlLabel
        value={value}
        control={<Checkbox checked={checked} name={name} color="primary" />}
        label={label}
        labelPlacement={labelPlacement}
        disabled={disabled}
      />
      {isError && <FormHelperText className="error">{errorText}</FormHelperText>}
    </Box>
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
