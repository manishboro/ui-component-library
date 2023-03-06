import React from 'react'
import PropTypes from 'prop-types'
import { Button, Typography } from '@material-ui/core'
import ReviewRating from 'components/Organisms/ReviewRating'

const ReviewTemplate = ({
    ratingName,
    maxRating,
    ratingValue,
    ratingIconSize = "small",
}) => {

    const buttonStyle = {
        borderRadius: 50,
        fontSize: 20,
        '&.MuiButton-outlined': {
            backgroundColor: "#000000",
            padding: 20
        }
    }
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <Typography variant='h6'>Reviews</Typography>
                <Button variant='' sx={buttonStyle} >March 2022 - February 2023</Button>
            </div>
            <div>
                <ReviewRating
                    ratingName={ratingName}
                    ratingValue={ratingValue}
                    maxRating={maxRating}
                    ratingIconSize={ratingIconSize}
                />
            </div>
        </div>
    )
}

ReviewTemplate.propTypes = {
    varian: PropTypes.string,
}

export default ReviewTemplate;
