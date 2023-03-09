import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from "prop-types";
import "./index.scss"
import { Box } from '@material-ui/core';


const AvatarWithIcon = ({
  variant = "circular",
  avatarSrc,
  avatarAlt,
  avatarSize,
  iconSrc,
  iconAlt,
  iconWidth = 20,
  iconHeight = 20,
  firstLetter
}) => {
  return (
    <div className={`em-avatar ${avatarSize}`}>
      <Avatar src={avatarSrc} alt={avatarAlt} className={avatarSize} variant={variant} children={firstLetter} />
      {iconSrc &&
        <Box
          position="absolute"
          bottom="-5px"
          right="-5px"
          borderRadius="100%"
          bgcolor="#FFFFFF"
          padding="2px"
        >
          <img src={iconSrc} width={iconWidth} height={iconHeight} alt={iconAlt} />
        </Box>
      }
    </div>
  );
};

AvatarWithIcon.propTypes = {
  variant: PropTypes.string,
  avatarSrc: PropTypes.string,
  avatarAlt: PropTypes.string,
  avatarSize: PropTypes.string,
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  iconClass: PropTypes.string
};

export default AvatarWithIcon;