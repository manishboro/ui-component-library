import React from 'react'
import PropTypes from 'prop-types'
import ContainerHeader from 'components/ContainerHeader'
import StarRatingComponent from 'react-star-rating-component'

const ReviewHeader = ({
    title,
    match,
    starRatingName,
    starRatingMaxValue,
    starRatingValue
}) => {
    return (
        <>
            <ContainerHeader title={`${title} Reviews`} match={match}>
                <div className="text-xl d-flex mr-auto ml-5">
                    <div className='mr-2'>{starRatingValue}/{starRatingMaxValue}</div>
                    <StarRatingComponent name={starRatingName} starCount={starRatingMaxValue} value={starRatingValue} />
                </div>
            </ContainerHeader>
        </>
    )
}

ReviewHeader.propTypes = {
    title: PropTypes.number,
    match: PropTypes.array,
}

export default ReviewHeader
