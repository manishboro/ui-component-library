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
      <Avatar src={avatarSrc} alt={avatarAlt} className={`mui-avatar ${avatarSize}`} variant={variant} />
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
};

export default AvatarWithIcon;