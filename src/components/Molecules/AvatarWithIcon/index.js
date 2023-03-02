import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from "prop-types";
import "./index.scss"


const AvatarWithIcon = ({
  variant = "circular",
  avatarSrc,
  avatarAlt,
  avatarSize,
  companyIconSrc,
  companyIconAlt,
  companyIconWidth = 20,
  companyIconHeight = 20,
  companyIconClass = "position-absolute bottom right"

}) => {
  return (
    <div className={`position-relative mui-avatar ${avatarSize}`}>
      <Avatar src={avatarSrc} alt={avatarAlt} className={avatarSize} variant={variant} />
      {companyIconSrc &&
        <div className={`bg-white rounded-circle ${companyIconClass}`}>
          <img src={companyIconSrc} width={companyIconWidth} height={companyIconHeight} alt={companyIconAlt} />
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
  companyIconSrc: PropTypes.string,
  companyIconAlt: PropTypes.string,
  companyIconWidth: PropTypes.number,
  companyIconHeight: PropTypes.number,
  companyIconClass: PropTypes.string
};

export default AvatarWithIcon;