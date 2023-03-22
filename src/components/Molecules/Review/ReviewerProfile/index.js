import React from 'react';
import { Box } from '@material-ui/core';
import EmTypography from 'components/Atoms/EmTypography';
import EmAvatarBadgeIcon from 'components/Molecules/EmAvatarBadgeIcon';
import PropTypes from "prop-types";

const ReviewerProfile = ({
  reviewerImg,
  reviewerName,
  textLabel = "Posted on",
  companyIcon,
  companyIconAlt,
  companyIconWidth = 18,
  companyIconHeight = 18,
  time
}) => {
  return (
    <Box display="flex" alignItems="center">
      <EmAvatarBadgeIcon
        avatarSrc={reviewerImg}
        avatarAlt={reviewerName}
        iconSrc={companyIcon}
        iconAlt={companyIconAlt}
        iconWidth={companyIconWidth}
        iconHeight={companyIconHeight}
      />
      <Box ml={1.5} lineHeight={1}>
        <EmTypography children={reviewerName} />
        <Box fontWeight={300}>
          {textLabel && <EmTypography display="inline" variant='caption' color='textSecondary' children={textLabel} />}

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
  companyIconWidth: PropTypes.number,
  companyIconHeight: PropTypes.number
};

export default ReviewerProfile;