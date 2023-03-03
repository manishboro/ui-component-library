import React from 'react'
import PropTypes from 'prop-types'
import ContainerHeader from 'components/ContainerHeader'
import { Rating } from '@material-ui/lab'

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
                <div className="text-xl d-flex mr-auto ml-5">
                    <div className='mr-2'>{ratingValue}/{maxRating}</div>
                    <Rating name={ratingName} defaultValue={ratingValue} max={maxRating} precision={0.5} size={ratingIconSize} />
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
