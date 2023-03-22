import React, { Children } from 'react';
import PropTypes from "prop-types";
import Avatar from '@material-ui/core/es/Avatar/Avatar';
import "./index.scss";
import { Box } from '@material-ui/core';

const EmAvatar = ({
  variant = "circular",
  avatarSrc,
  avatarAlt,
  avatarSize,
  onClick,
  bgColor = "#FFD451",
  textColor = "#FFC720"

}) => {
  return (
    <div className={`em-avatar ${avatarSize}`} onClick={onClick} >

      <Avatar
        src={avatarSrc}
        alt={avatarAlt}
        className={avatarSize}
        variant={variant}
        style={{ 'background': bgColor, 'color': textColor }}
      >
      </Avatar>
    </div>
  );
};

EmAvatar.propTypes = {
  variant: PropTypes.string,
  avatarSrc: PropTypes.string,
  avatarAlt: PropTypes.string,
  avatarSize: PropTypes.string,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default EmAvatar;