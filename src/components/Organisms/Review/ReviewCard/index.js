import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import EmTypography from 'components/Atoms/EmTypography'

const reviewCardStyle = {
    border: "1px solid #D1D1DB",
    borderRadius: "4px",
    backgroundColor: "#fff"
}

const ReviewCard = ({
    iconSrc,
    iconAlt,
    iconWidth = 28,
    iconHeight = 28,
    iconClass = "",
    heading,
    value
}) => {
    return (
        <Box sx={reviewCardStyle} p={2}>
            <Box mb={5}>
                <img
                    className={iconClass}
                    src={iconSrc}
                    width={iconWidth}
                    height={iconHeight}
                    alt={iconAlt}
                />
            </Box>
            <EmTypography variant='body2' children={heading} />
            <Box mt={0.5} fontWeight={600}>
                <EmTypography variant='h3' children={value} />
            </Box>
        </Box>
    )
}

ReviewCard.propTypes = {
    varian: PropTypes.string,
}

export default ReviewCard;
