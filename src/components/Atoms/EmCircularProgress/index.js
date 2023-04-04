import React from 'react';
import PropTypes from "prop-types";
import "./index.scss";
import { CircularProgress } from '@material-ui/core';

const EmCircularProgress = ({
  size = 50,
  thickness = 3.6,
  color = "primary"
}) => {

  return (
    <CircularProgress
      className='em-circular-progress'
      size={size}
      thickness={thickness}
      color={color}
    />
  );
};

EmCircularProgress.propTypes = {
  badgeContent: PropTypes.number,
  color: PropTypes.string,
};

export default EmCircularProgress;