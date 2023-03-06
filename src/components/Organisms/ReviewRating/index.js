import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import RatingStarWithValue from 'components/Molecules/RatingStarWithValue';
import EmTypography from 'components/Atoms/EmTypography';

const ReviewRating = ({
    ratingName,
    maxRating,
    ratingValue,
    ratingIconSize = "small",
}) => {
    return (
        <div className='bg-white p-8'>
            <div className='row max-w-md  m-auto'>
                <div className='col-sm-3'>
                    <Typography>Total Reviews</Typography>
                    <EmTypography variant='h2'>50</EmTypography>
                </div>
                <div className='col-sm-4'>
                    <Typography>Average Rating</Typography>
                    <RatingStarWithValue
                        ratingName={ratingName}
                        ratingValue={ratingValue}
                        maxRating={maxRating}
                        ratingIconSize={ratingIconSize}
                    />
                </div>
                <div className='col-sm-5'>

                </div>
            </div>
        </div>
    )
}

ReviewRating.propTypes = {
    varian: PropTypes.string,
}

export default ReviewRating;
