import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from "prop-types";
import { Box } from '@material-ui/core';
import EmTypography from 'components/Atoms/EmTypography';
import AvatarWithIcon from 'components/Molecules/AvatarWithIcon';


const ReviewerProfile = ({
  reviewerImg,
  reviewerName,
  companyIcon,
  companyIconWidth,
  companyIconHeight,
  time
}) => {
  return (
    <Box display="flex" alignItems="center">
      <AvatarWithIcon
        avatarSrc={reviewerImg}
        avatarAlt={reviewerName}
        iconSrc={companyIcon}
        iconWidth={companyIconWidth}
        iconHeight={companyIconHeight} />
      <Box ml={1.5}>
        <EmTypography children={reviewerName} />
        <Box fontWeight={300}>
          <EmTypography display="inline" variant='caption' color='textSecondary' children="Posted on " />
          <EmTypography display="inline" variant='caption' color='textSecondary' children={time} />
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