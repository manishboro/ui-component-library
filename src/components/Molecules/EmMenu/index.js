import React, { useState } from 'react';
import PropTypes from "prop-types";
import "./index.scss";
import { Menu, MenuItem } from '@material-ui/core';

const EmMenu = ({
  id,
  menuTitle
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div aria-controls={id} onClick={handleClick}>{menuTitle}</div>
      <Menu
        id={id}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

EmMenu.propTypes = {
  name: PropTypes.string,
};

export default EmMenu;