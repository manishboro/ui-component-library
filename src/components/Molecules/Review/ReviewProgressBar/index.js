import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box } from '@material-ui/core';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 8,
    borderRadius: 5,

  },
  colorPrimary: {
    backgroundColor: "#F3F3F6",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#FFC107',
  },
}))(LinearProgress);

const ReviewProgressBar = ({
  numberOfStar,
  value
}) => {
  return (
    <div>
      <Box display="flex" alignItems="center">
        <Box display="flex" alignItems="center" fontSize={12} lineHeight={1} fontWeight={500} color="#14142B">
          {numberOfStar}
          <Box display="flex" alignItems="center" ml={0.5}>
            <img src='/images/icons/star.svg' width={10} height={10} alt="star" />
          </Box>
        </Box>

        <Box px={1} width={"100%"} >
          <BorderLinearProgress variant="determinate" value={50} />
        </Box>

        <Box ml="auto" fontSize={12} fontWeight={500} color="#14142B">
          {value}%
        </Box>
      </Box>

    </div>
  );
}

ReviewProgressBar.propTypes = {
  numberOfStar: PropTypes.number,
  value: PropTypes.number,
};

export default ReviewProgressBar;
