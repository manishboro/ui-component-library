import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import ReviewProgressBar from 'components/Molecules/Review/ReviewProgressBar'

const reviewProgressCardStyle = {
    border: "1px solid #D1D1DB",
    borderRadius: "4px",
    backgroundColor: "#fff"
}

const ReviewProgressCard = ({
    reviewRatingList
}) => {
    return (
        <Box sx={reviewProgressCardStyle} py={1} px={2}>
            {reviewRatingList.map((list, index) => (
                <Box py="5px">
                    <ReviewProgressBar
                        key={index}
                        numberOfStar={list.numberOfStar}
                        value={list.value}
                    />
                </Box>
            ))}
        </Box>
    )
}

ReviewProgressCard.propTypes = {
    reviewRatingList: PropTypes.array,
}

export default ReviewProgressCard;
