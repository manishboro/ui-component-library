import React from 'react';
import PropTypes from "prop-types";
import { Typography } from '@material-ui/core';
import "./index.scss";

const EmTypography = ({
  variant = "body1",
  align = "left",
  children,
  color = "textPrimary",
  display = "block",
  noWrap = false,
  className = "em-typography"
}) => {

  return (
    <Typography
      variant={variant}
      align={align}
      children={children}
      className={className}
      color={color}
      display={display}
      noWrap={noWrap}
    />
  );
};

EmTypography.propTypes = {
  variant: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.object,
  color: PropTypes.string,
  display: PropTypes.string,
  noWrap: PropTypes.bool,
};

export default EmTypography;