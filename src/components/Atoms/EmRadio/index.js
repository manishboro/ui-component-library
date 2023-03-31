import React from 'react';
import PropTypes from "prop-types";
import "./index.scss";
import { Box, FormControlLabel, FormHelperText, Radio } from '@material-ui/core';

const EmRadio = ({
  name,
  label,
  value,
  disabled,
  errorText,
  isError,
  onChange,
  labelPlacement = "end",
}) => {
  return (
    <Box className={`em-radio ${isError && "error-radio"}`}>
      <FormControlLabel name={name} value={value} onChange={onChange} control={<Radio checkedIcon={<span className="checkedIcon" />}
        icon={<span className="radioIcon" />} />} label={label} disabled={disabled} labelPlacement={labelPlacement} />
      {isError && <FormHelperText className='error'>{errorText}</FormHelperText>}
    </Box>
  );
};

EmRadio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  labelPlacement: PropTypes.string,
  errorText: PropTypes.string,
  isError: PropTypes.bool,
  onChange: PropTypes.func,
};

export default EmRadio;