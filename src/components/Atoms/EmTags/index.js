import React from 'react';
import PropTypes from "prop-types";
import { Chip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import "./index.scss";

const EmTags = ({
  label,
  variant = "round",
  size = "small",
  bgColor = "#FFC107",
  textColor = '#FFF',
  iconColor = '#FFF',
  isDeleteIcon = true,
  handleDelete = () => { },
  iconPosition = "right"
}) => {

  return (
    <Chip
      className={`em-chip ${variant} ${size} ${isDeleteIcon && 'hideDeleteIcon'} ${iconPosition}`}
      style={{ 'background': bgColor, 'color': textColor }}
      label={label}
      onDelete={handleDelete}
      deleteIcon={<CloseIcon style={{ width: '16px', 'color': iconColor }} />}
    />
  );
};

EmTags.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  isDeleteIcon: PropTypes.bool,
  handleDelete: PropTypes.func,
};

export default EmTags;