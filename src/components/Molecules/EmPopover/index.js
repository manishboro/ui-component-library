import React, { useState } from 'react';
import PropTypes from "prop-types";
import Popover from '@material-ui/core/Popover';
import "./index.scss"

const EmPopover = ({
  id,
  popoverText,
  popoverContent,
  anchorOrigin,
  transformOrigin
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
    <div>
      <div aria-describedby={id} onClick={handleClick}>
        {popoverText}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={popoverClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        {popoverContent}
      </Popover>
    </div>
  );
}

EmPopover.propTypes = {
  id: PropTypes.string,
  anchorOrigin: PropTypes.object,
  transformOrigin: PropTypes.object,
  popoverText: PropTypes.node,
  popoverContent: PropTypes.node,
};
export default EmPopover;