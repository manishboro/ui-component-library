import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from "prop-types";
import { Typography } from '@material-ui/core';


const ReviewerProfile = ({
  variant = "circular",
  reviewerImg,
  avatarSize,
  reviewerName,
  time

}) => {
  return (
    <div className='d-flex'>
      <Avatar src={reviewerImg} alt={reviewerName} className={avatarSize} variant={variant} />
      <div>
        <Typography children={reviewerName} />
        <div className='d-flex'>
          <img src="/images/icons/clock.svg" width="12" height="12" alt="time" />
          <Typography children={time} />
        </div>
      </div>

    </div>
  );
};

ReviewerProfile.propTypes = {
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

export default ReviewerProfile;