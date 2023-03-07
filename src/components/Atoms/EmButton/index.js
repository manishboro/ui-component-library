import React from 'react';
import PropTypes from "prop-types";
import { Button } from '@material-ui/core';
import "./index.scss";

const EmButton = ({
  children,
  variant = "contained",
  size = "small",
  color = "primary",
  href,
  component,
  disabled = false,
  startIcon,
  endIcon,
  fullWidth = false,
  className = "em_button"

}) => {

  return (
    <Button
      variant={variant}
      children={children}
      className={className}
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