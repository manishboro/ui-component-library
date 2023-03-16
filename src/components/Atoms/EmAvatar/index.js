import React from 'react';
import PropTypes from "prop-types";
import Avatar from '@material-ui/core/es/Avatar/Avatar';
import "./index.scss";

const EmAvatar = ({
  variant = "circular",
  avatarSrc,
  avatarAlt,
  avatarSize,
  firstLetter,
  onClick
}) => {
  return (
    <div className={`em-avatar ${avatarSize}`} onClick={onClick}>
      <Avatar
        src={avatarSrc}
        alt={avatarAlt}
        className={avatarSize}
        variant={variant}
        children={firstLetter}
        onC
      />
    </div>
  );
};

EmAvatar.propTypes = {
  variant: PropTypes.string,
  avatarSrc: PropTypes.string,
  avatarAlt: PropTypes.string,
  avatarSize: PropTypes.string,
  firstLetter: PropTypes.string,
};

export default EmAvatar;