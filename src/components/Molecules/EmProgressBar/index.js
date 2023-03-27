import React from 'react';
import PropTypes from "prop-types";
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box } from '@material-ui/core';
import "./index.scss";

const EmProgressBar = ({
  type = "rounded",
  size = "small",
  isLabel = true,
  label,
  value,
}) => {

  return (
    <>
      {isLabel && <Box display="flex" justifyContent="space-between" alignItems="center" fontSize="14px" lineHeight="24px" fontWeight={400} color="#1F1F37" mb={1}>
        <div>{label}</div>
        <div>{value}%</div>
      </Box>}
      <LinearProgress className={`em-progressBar ${type} ${size}`} variant="determinate" value={value} />
    </>
  );
};

EmProgressBar.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  isLabel: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.number,
};

export default EmProgressBar;