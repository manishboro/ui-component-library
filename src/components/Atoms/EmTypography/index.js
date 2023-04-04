import React from 'react';
import PropTypes from "prop-types";
import { Box, Typography } from '@material-ui/core';
import "./index.scss";

const EmTypography = ({
  children,
  style,
  fontWeight,
  textColor,
  variant = "body1",
  align = "left",
  color = "textPrimary",
  display = "block",
  noWrap = false,
}) => {

  return (
    <Box fontWeight={fontWeight} color={textColor}>
      <Typography
        variant={variant}
        align={align}
        children={children}
        className="em-typography"
        color={color}
        display={display}
        noWrap={noWrap}
        style={style}
      />
    </Box>

  );
};

EmTypography.propTypes = {
  variant: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  display: PropTypes.string,
  noWrap: PropTypes.bool,
};

export default EmTypography;