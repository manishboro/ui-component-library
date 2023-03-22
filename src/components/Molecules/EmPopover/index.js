import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Box } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import "./index.scss"

const EmPopover = ({
  id,
  popoverText,
  popoverContent,
  anchorOrigin,
  anchorPosition
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const popoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box className='em-popover'>
      <Box display='inline-block' style={{ 'cursor': 'pointer' }} aria-describedby={id} onClick={handleClick}>
        {popoverText}
      </Box>

      <Popover
        className='em-popover-content'
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        anchorPosition={anchorPosition}
        onClose={popoverClose}>
        {popoverContent}
      </Popover>
    </Box>
  );
}

EmPopover.propTypes = {
  id: PropTypes.string,
  anchorOrigin: PropTypes.object,
  anchorPosition: PropTypes.object,
  popoverText: PropTypes.node,
  popoverContent: PropTypes.node,
};
export default EmPopover;