import React from 'react';
import PropTypes from "prop-types";
import "./index.scss"
import { Rating } from '@material-ui/lab';


const RatingStarWithValue = ({
  ratingName,
  maxRating,
  ratingValue,
  ratingIconSize = "small",
}) => {
  return (
    <div className="text-xl d-flex">
      {ratingValue &&
        <div className='mr-2'>{ratingValue}/{maxRating}</div>
      }
      <Rating name={ratingName} defaultValue={ratingValue} max={maxRating} precision={0.5} size={ratingIconSize} />
    </div>
  );
};

RatingStarWithValue.propTypes = {
  ratingName: PropTypes.string,
  ratingValue: PropTypes.number,
  maxRating: PropTypes.number,
  ratingIconSize: PropTypes.string,
};

export default RatingStarWithValue;