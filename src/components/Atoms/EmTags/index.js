import React from 'react';
import PropTypes from "prop-types";
import { Chip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import "./index.scss";

const EmTags = ({
  variant = "round",
  size = "small",
  label,
  bgColor = "#FFC107",
  textColor = '#FFF',
  isDeleteIcon = true,
  handleDelete = () => { }
}) => {

  return (
    <Chip
      className={`em-chip ${variant} ${size} ${isDeleteIcon && 'hideDeleteIcon'}`}
      style={{ 'background': bgColor, 'color': textColor }}
      label={label}
      onDelete={handleDelete}
      deleteIcon={<CloseIcon style={{ width: '16px', 'color': textColor }} />}
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