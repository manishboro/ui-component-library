import React from 'react'
import PropTypes from 'prop-types'
import ContainerHeader from 'components/ContainerHeader'
import RatingStarWithValue from 'components/Molecules/RatingStarWithValue'

const ReviewHeader = ({
    title,
    match,
    ratingName,
    maxRating,
    ratingValue,
    ratingIconSize = "small",
}) => {
    return (
        <>
            <ContainerHeader title={`${title} Reviews`} match={match}>
                <RatingStarWithValue
                    ratingName={ratingName}
                    ratingValue={ratingValue}
                    maxRating={maxRating}
                    ratingIconSize={ratingIconSize}
                />
            </ContainerHeader>
        </>
    )
}

ReviewHeader.propTypes = {
    title: PropTypes.number,
    match: PropTypes.array,
}

export default ReviewHeader
