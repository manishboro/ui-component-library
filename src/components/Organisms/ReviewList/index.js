import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import StarRatingComponent from 'react-star-rating-component'
import AvatarWithIcon from 'components/Molecules/AvatarWithIcon';

const ReviewList = ({
    variant = "circular",
    avatarSrc,
    avatarAlt,
    avatarSize,
    iconSrc,
    iconAlt,
    iconWidth = 20,
    iconHeight = 20,
    starRatingName,
    starRatingValue,
    starRatingMaxValue,
    reviewerName,
    reviewedDate,
    reviewDescription,
    reviewedMsg,
}) => {
    return (
        <div className='bg-white p-4'>
            <div className='d-flex'>
                <div>
                    <AvatarWithIcon
                        variant={variant}
                        avatarSize={avatarSize}
                        avatarSrc={avatarSrc}
                        avatarAlt={avatarAlt}
                        iconSrc={iconSrc}
                        iconAlt={iconAlt}
                        iconWidth={iconWidth}
                        iconHeight={iconHeight}
                    />
                </div>
                <div className='ml-3'>
                    <div className="text-xl">
                        <StarRatingComponent name={starRatingName} starCount={starRatingMaxValue} value={starRatingValue} />
                    </div>
                    <Typography ><span className='font-weight-bold'>{reviewerName}</span> {reviewedDate}</Typography>
                </div>
            </div>

            <Typography className='mt-4 mb-4'>{reviewDescription}</Typography>

            <div styleName="mb-0">
                <Typography variant="h6">{reviewedMsg}</Typography>
            </div>
        </div>
    )
}

ReviewList.propTypes = {
    varian: PropTypes.string,
    avatarSrc: PropTypes.string,
    avatarAlt: PropTypes.string,
    avatarSize: PropTypes.string,
    iconSrc: PropTypes.string,
    iconAl: PropTypes.string,
    iconWidth: PropTypes.number,
    iconHeight: PropTypes.number,
    starRatingName: PropTypes.string,
    starRatingValue: PropTypes.number,
    starRatingMaxValue: PropTypes.number,
    reviewerName: PropTypes.string,
    reviewedDate: PropTypes.string,
    reviewDescription: PropTypes.string,
    reviewedMsg: PropTypes.string,
}

export default ReviewList
