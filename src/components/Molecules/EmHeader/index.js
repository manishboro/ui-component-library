import React from 'react';
import PropTypes from "prop-types";
import ProfileDropDown from '../ProfileDropDown';
import { Box, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import "./index.scss";

const EmHeader = ({
  avatarSrc,
  avatarAlt,
  avatarSize,
  userName,
  firstLetter,
  onClick,
  profileDropDownList
}) => {
  return (
    <Box
      bgcolor="#FCFCFC"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #D1D1DB"
      py={{ xs: "14px", md: 2 }}
      px={2}
    >
      <Box style={{ cursor: "pointer" }}>
        <MenuIcon />
      </Box>
      <Box display="flex">
        <Box mr={1}>
          <Link
            component="button"
            onClick={onClick}
          >
            <img src="/images/icons/call.svg" width={32} height={32} alt="call" />
          </Link>
        </Box>
        <Box mr={{ xs: 3, md: 5 }}>
          <Link
            component="button"
            onClick={onClick}
          >
            <img src="/images/icons/email.svg" width={32} height={32} alt="email" />
          </Link>
        </Box>
        <ProfileDropDown
          avatarSrc={avatarSrc}
          avatarAlt={avatarAlt}
          avatarSize={avatarSize}
          userName={userName}
          firstLetter={firstLetter}
          profileDropDownList={profileDropDownList}
        />
      </Box>
    </Box>
  );
};

EmHeader.propTypes = {
  iconSrc: PropTypes.string,
};

export default EmHeader;