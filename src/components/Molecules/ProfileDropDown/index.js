import React from 'react';
import PropTypes from 'prop-types';
import { Box, Menu, MenuItem } from '@material-ui/core';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import EmAvatar from '../../Atoms/EmAvatar';


const ProfileDropDown = ({
  variant = "circular",
  avatarSrc,
  avatarAlt,
  avatarSize = "small",
  userName,
  profileDropdownOptions
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" alignItems="center" >
      <EmAvatar
        variant={variant}
        avatarSrc={avatarSrc}
        avatarAlt={avatarAlt}
        avatarSize={avatarSize}
      />
      <Box
        display="flex"
        fontSize="14"
        color="#14142B"
        fontWeight="600"
        onClick={handleClick}
        ml={{ xs: 0, md: 1 }}
        style={{ "cursor": "pointer" }}
      ><Box display={{ xs: "none", md: "block" }}>
          {userName}
        </Box>
        <ExpandMoreRoundedIcon className='arrow' />
      </Box>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {profileDropdownOptions.map(item => {
          return <MenuItem onClick={handleClose}>{item.label}</MenuItem>;
        })}
      </Menu>
    </Box>
  );
};

ProfileDropDown.propTypes = {
  iconSrc: PropTypes.string,
};

export default ProfileDropDown;
