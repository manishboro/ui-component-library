import React from 'react';
import { Box } from '@material-ui/core';
import EmTypography from '../../../Atoms/EmTypography';
import AvatarWithIcon from '../../../Molecules/AvatarWithIcon';
import PropTypes from 'prop-types';

const ReviewerProfile = ({
  reviewerImg,
  reviewerName,
  firstLetter,
  textLabel = 'Posted on',
  companyIcon,
  companyIconAlt,
  companyIconWidth = 18,
  companyIconHeight = 18,
  time,
}) => {
  return (
    <Box display="flex" alignItems="center">
      <AvatarWithIcon
        avatarSrc={reviewerImg}
        avatarAlt={reviewerName}
        iconSrc={companyIcon}
        iconAlt={companyIconAlt}
        iconWidth={companyIconWidth}
        iconHeight={companyIconHeight}
        firstLetter={firstLetter}
      />
      <Box ml={1.5} lineHeight={1}>
        <EmTypography children={reviewerName} />
        <Box fontWeight={300}>
          {textLabel && <EmTypography display="inline" variant="caption" color="textSecondary" children={textLabel} />}

          <EmTypography display="inline" variant="caption" color="textSecondary" children={time} />
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
  companyIconHeight: PropTypes.number,
};

export default ReviewerProfile;
