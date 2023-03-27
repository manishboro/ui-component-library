import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import EmProgressBar from '../../../Molecules/EmProgressBar';

const ReviewProgressBar = ({ numberOfStar, value }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center" fontSize={12} lineHeight={1} fontWeight={500} color="#14142B">
        {numberOfStar}
        <Box display="flex" alignItems="center" ml={0.5}>
          <img src="/images/icons/star.svg" width={10} height={10} alt="star" />
        </Box>
      </Box>

      <Box px={1} width={'100%'}>
        <EmProgressBar isLabel={false} value={value} />
      </Box>

      <Box ml="auto" fontSize={12} fontWeight={500} color="#14142B">
        {value}%
      </Box>
    </Box>
  );
};

ReviewProgressBar.propTypes = {
  numberOfStar: PropTypes.number,
  value: PropTypes.number,
};

export default ReviewProgressBar;
