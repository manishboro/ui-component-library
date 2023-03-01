import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from "prop-types";
import "./index.scss"


const AvatarWithIcon = ({
  variant = "circular",
  avatarSrc,
  avatarAlt,
  avatarSize,
  iconSrc,
  iconAlt,
  iconWidth = 20,
  iconHeight = 20,
  iconClass = "position-absolute bottom right"

}) => {
  return (
    <div className={`position-relative mui-avatar ${avatarSize}`}>
      <Avatar src={avatarSrc} alt={avatarAlt} className={avatarSize} variant={variant} />
      {iconSrc &&
        <div className={`bg-white rounded-circle ${iconClass}`}>
          <img src={iconSrc} width={iconWidth} height={iconHeight} alt={iconAlt} />
        </div>
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