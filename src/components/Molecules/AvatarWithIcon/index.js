import React from 'react';
import PropTypes from "prop-types";
import { Box } from '@material-ui/core';
import EmAvatar from 'components/Atoms/EmAvatar';

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
      <EmAvatar
        variant={variant}
        avatarSrc={avatarSrc}
        avatarAlt={avatarAlt}
        avatarSize={avatarSize}
        firstLetter={firstLetter}
      />
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