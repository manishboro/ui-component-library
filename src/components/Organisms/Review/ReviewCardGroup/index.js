import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import ReviewProgressCard from '../ReviewProgressCard'
import ReviewCard from '../ReviewCard'
import "./index.scss"

const ReviewCardGroup = ({
    totalReview,
    averageRating,
    reviewRatings,
    fbRecommendation
}) => {
    return (
        <Box display="flex" flexWrap="wrap" mx={{ xs: "-4px", md: "-8px" }}>
            <Box p={{ xs: "4px", md: "8px" }} width={{ xs: "50%", md: "25%" }} className={`reviewCard reviewCard-1`}>
                <ReviewCard
                    iconSrc={totalReview.iconSrc}
                    iconAlt={totalReview.iconSrc}
                    iconWidth={28}
                    iconHeight={28}
                    heading={totalReview.heading}
                    value={totalReview.value}
                />
            </Box>
            <Box p={{ xs: "4px", md: "8px" }} width={{ xs: "50%", md: "25%" }} className={`reviewCard reviewCard-2`}>
                <ReviewCard
                    iconSrc={averageRating.iconSrc}
                    iconAlt={averageRating.iconSrc}
                    iconWidth={28}
                    iconHeight={28}
                    heading={averageRating.heading}
                    value={averageRating.value}
                />
            </Box>

            <Box p={{ xs: "4px", md: "8px" }} width={{ xs: "50%", md: "25%" }} className={`reviewCard reviewCard-3`}>
                <ReviewProgressCard reviewRatings={reviewRatings} />
            </Box>

            <Box p={{ xs: "4px", md: "8px" }} width={{ xs: "50%", md: "25%" }} className={`reviewCard reviewCard-4`}>
                <ReviewCard
                    iconSrc={fbRecommendation.iconSrc}
                    iconAlt={fbRecommendation.iconSrc}
                    iconWidth={28}
                    iconHeight={28}
                    heading={fbRecommendation.heading}
                    value={fbRecommendation.value}
                />
            </Box>
        </Box>
    )
}

ReviewCardGroup.propTypes = {
    totalReview: PropTypes.object,
    averageRating: PropTypes.object,
    reviewRatings: PropTypes.object,
    fbRecommendation: PropTypes.object,
}

export default ReviewCardGroup;
