import React from 'react';
import PropTypes from "prop-types";
import { Box } from '@material-ui/core';
import "./index.scss";

const ReviewRating = ({
  num,
  variant
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={42}
      height={28}
      className={`em-rating ${variant}`}
    >
      <Box mr={0.5}>
        {num}
      </Box>
      <img src='/images/icons/star-w.svg' width="16" height="16" alt="star" />
    </Box>
  );
};

ReviewRating.propTypes = {
  variant: PropTypes.string,
  reviewerImg: PropTypes.string,
  children: PropTypes.string,
  reviewerName: PropTypes.string,
  avatarSize: PropTypes.string,
  time: PropTypes.string,
};

export default ReviewRating;