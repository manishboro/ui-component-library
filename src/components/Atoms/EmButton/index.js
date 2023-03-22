import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import './index.scss';

const EmButton = ({
  children,
  href,
  component,
  startIcon,
  endIcon,
  onClick,
  textClass = '',
  disabled = false,
  variant = 'contained',
  size = 'small',
  color = 'primary',
  shape = 'square',
  iconOnly = false,
  fullWidth = false,
  fontWeight = 'fw-500',
}) => {
  return (
    <Button
      variant={variant}
      children={children}
      className={`em-button ${fontWeight} ${shape} ${textClass} ${size} ${iconOnly && 'iconOnly'}`}
      color={color}
      component={component}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      href={href}
      onClick={onClick}
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
  iconOnly: PropTypes.bool,
};

export default EmButton;
