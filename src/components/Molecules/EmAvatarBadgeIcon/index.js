import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Box } from '@material-ui/core';
import EmAvatar from '../../Atoms/EmAvatar';

const EmAvatarBadgeIcon = ({
  avatarSrc,
  avatarAlt,
  avatarSize,
  avatarClick,
  iconSrc,
  iconAlt,
  variant = 'circular',
  avatarBgColor = '#FFD451',
  avatarTextColor = '#FFC720',
  iconWidth = 20,
  iconHeight = 20,
}) => {
  return (
    <>
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={
          iconSrc && <Box borderRadius="100%" bgcolor="#FFFFFF" padding="2px">
            <img src={iconSrc} width={iconWidth} height={iconHeight} alt={iconAlt} />
          </Box>

        }
      >
        <EmAvatar
          variant={variant}
          avatarSrc={avatarSrc}
          avatarAlt={avatarAlt}
          avatarSize={avatarSize}
          bgColor={avatarBgColor}
          textColor={avatarTextColor}
          onClick={avatarClick}
        />
      </Badge>
    </>
  );
};

EmAvatarBadgeIcon.propTypes = {
  variant: PropTypes.string,
  avatarSrc: PropTypes.string,
  avatarAlt: PropTypes.string,
  avatarSize: PropTypes.string,
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  iconClass: PropTypes.string,
};

export default EmAvatarBadgeIcon;
