import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import EmTypography from '../../../Atoms/EmTypography';

const reviewCardStyle = {
  border: '1px solid #D1D1DB',
  borderRadius: '4px',
  backgroundColor: '#fff',
};

const ReviewCard = ({
  iconSrc,
  iconAlt,
  heading,
  value,
  iconWidth = 28,
  iconHeight = 28,
}) => {
  return (
    <Box sx={reviewCardStyle} p={2}>
      <Box mb={5}>
        <img src={iconSrc} width={iconWidth} height={iconHeight} alt={iconAlt} />
      </Box>
      <EmTypography variant="subtitle2" color="textSecondary" children={heading} />
      <Box mt={0.5} fontWeight={600}>
        <EmTypography variant="h3" children={value} />
      </Box>
    </Box>
  );
};

ReviewCard.propTypes = {
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  heading: PropTypes.string,
  value: PropTypes.number,
};

export default ReviewCard;
