import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import ReviewProgressBar from '../../../Molecules/Review/ReviewProgressBar';

const reviewProgressCardStyle = {
  border: '1px solid #D1D1DB',
  borderRadius: '4px',
  backgroundColor: '#fff',
};

const ReviewProgressCard = ({ reviewRatings }) => {
  return (
    <Box sx={reviewProgressCardStyle} py={1} px={2}>
      {reviewRatings.map((list, index) => (
        <Box py="5px" key={index}>
          <ReviewProgressBar numberOfStar={list.numberOfStar} value={list.value} />
        </Box>
      ))}
    </Box>
  );
};

ReviewProgressCard.propTypes = {
  reviewRatings: PropTypes.array,
};

export default ReviewProgressCard;
