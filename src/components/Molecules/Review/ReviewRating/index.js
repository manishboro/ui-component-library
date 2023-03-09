import React from 'react';
import PropTypes from "prop-types";
import { Box } from '@material-ui/core';
import "./index.scss";

const ReviewRating = ({ num }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={42}
      height={28}
      className={`em-rating ${num >= 4 && "high"} ${(num < 4 && num >= 3) && "medium"} ${num < 3 && "low"}`}
    >
      <Box mr={0.5}>
        {num}
      </Box>
      <img src='/images/icons/star-w.svg' width="16" height="16" alt="star" />
    </Box>
  );
};

ReviewRating.propTypes = {
  num: PropTypes.number
};

export default ReviewRating;