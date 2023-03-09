import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import ReviewProgressCard from '../ReviewProgressCard'
import ReviewCard from '../ReviewCard'

const ReviewCardGroup = ({
    reviewCardData
}) => {
    return (
        <Box display="flex" flexWrap="wrap" mx={{ xs: "-4px", md: "-8px" }}>
            {reviewCardData.map((list, index) => (
                <Box p={{ xs: "4px", md: "8px" }} width={{ xs: "50%", md: "25%" }} className={`reviewCard reviewCard-${index}`}>
                    {
                        list.type === "reviewCard" ? <ReviewCard
                            key={index}
                            iconSrc={list.iconSrc}
                            iconAlt={list.iconAlt}
                            iconWidth={28}
                            iconHeight={28}
                            heading={list.heading}
                            value={list.value}
                        /> : <ReviewProgressCard reviewRatingList={list.reviewRatingList} />
                    }
                </Box>
            ))}
        </Box>
    )
}

ReviewCardGroup.propTypes = {
    reviewCardData: PropTypes.array,
}

export default ReviewCardGroup;
