import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from "prop-types";
import { Box } from '@material-ui/core';
import EmTypography from 'components/Atoms/EmTypography';


const ReviewerProfile = ({
  variant = "circular",
  reviewerImg,
  avatarSize,
  children,
  reviewerName,
  time
}) => {
  return (
    <Box display="flex" alignItems="center">
      <Avatar
        src={reviewerImg}
        alt={reviewerName}
        className={avatarSize}
        variant={variant}
        children={children}
      />
      <Box ml={1}>
        <EmTypography children={reviewerName} />
        <Box display="flex" alignItems="center">
          <img src="/images/icons/clock.svg" width="12" height="12" alt="time" />
          <Box ml={0.5} fontWeight={300}>
            <EmTypography variant='caption' children={time} />
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

ReviewerProfile.propTypes = {
  variant: PropTypes.string,
  reviewerImg: PropTypes.string,
  children: PropTypes.string,
  reviewerName: PropTypes.string,
  avatarSize: PropTypes.string,
  time: PropTypes.string,
};

export default ReviewerProfile;