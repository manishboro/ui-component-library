import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import "./index.scss"

const EmRating = ({
  defaultValue,
  max,
  icon,
  precision = 0.5
}) => {
  return (
    <Rating
      className='em-rating'
      defaultValue={defaultValue}
      max={max}
      precision={precision}
      icon={icon}
    />
  );
}

EmRating.propTypes = {
  defaultValue: PropTypes.number,
  max: PropTypes.number,
  icon: PropTypes.node
};

export default EmRating;