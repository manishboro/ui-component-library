import React from 'react';
import PropTypes from "prop-types";
import { Button } from '@material-ui/core';
import "./index.scss";

const EmButton = ({
  children,
  variant = "contained",
  size = "small",
  color = "primary",
  shape = "square",
  href,
  component,
  disabled = false,
  startIcon,
  endIcon,
  fullWidth = false,
  fontWeight = "fw-500",
  textClass = "",
}) => {

  return (
    <Button
      variant={variant}
      children={children}
      className={`em-button ${fontWeight} ${shape} ${textClass}`}
      color={color}
      component={component}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      href={href}
      size={size}
    />
  );
};

EmButton.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.object,
  color: PropTypes.string,
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.string,
};

export default EmButton;