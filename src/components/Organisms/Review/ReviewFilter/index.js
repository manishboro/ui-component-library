import React from 'react'
import PropTypes from 'prop-types'
import IconWithTitle from 'components/Molecules/IconWithTitle'
import { Box, Grid } from '@material-ui/core'
import EmPagination from 'components/Molecules/EmPagination'
import EmTypography from 'components/Atoms/EmTypography'
import EmButton from 'components/Atoms/EmButton'
import ReviewRating from 'components/Molecules/Review/ReviewRating'
import ReviewerProfile from 'components/Molecules/Review/ReviewerProfile'
import ReviewFilterBar from 'components/Molecules/Review/ReviewFilterBar'
import InsertChartOutlinedRoundedIcon from '@material-ui/icons/InsertChartOutlinedRounded';

const ReviewFilter = ({
    locationOptionList,
    platformOptionList,
    sortByOptionList,
    reviewData
}) => {
    return (
        <>
            <Box display="flex" alignContent="center" flexWrap="wrap" mt={{ xs: 2.5, md: 3 }}>
                <Box width={{ xs: '100%', md: '70%' }} order={{ xs: 2, md: 1 }} m={{ xs: "24px 0 8px 0", md: "0" }}>
                    <ReviewFilterBar
                        locationOptionList={locationOptionList}
                        platformOptionList={platformOptionList}
                        sortByOptionList={sortByOptionList}
                    />
                </Box>
                <Box ml={{ xs: '0', md: 'auto' }} maxWidth={{ xs: '100%', md: '220px' }} width={{ xs: '100%', md: '30%' }} order={{ xs: 1, md: 2 }}>
                    <EmButton
                        variant='outlined'
                        size='large'
                        children="View Detailed Metrics"
                        endIcon={<InsertChartOutlinedRoundedIcon style={{ fontSize: '18px' }} />}
                        fullWidth={{ xs: true, md: false }}
                    />
                </Box>
            </Box>

            <Box fontSize={14} borderBottom="1px solid #E5E5EB;" color="#9C9CAF" pt={2} pb={1.5} display={{ xs: "none", md: "block" }}>
                <Grid container spacing={2}>
                    <Grid item md={3} sm={6}>
                        Reviwer
                    </Grid>
                    <Grid item md={3} sm={6}>
                        Location
                    </Grid>
                    <Grid item md={6} sm={6}>
                        Rating and Review
                    </Grid>
                </Grid>
            </Box>
            {
                reviewData.map((data) => {
                    return (
                        <Box borderBottom="1px solid #E5E5EB;" p={{ xs: '16px 0', md: '24px 0' }}>
                            <Box display="flex" flexWrap="wrap">
                                <Box pr={{ md: 1 }} width={{ md: "25%" }} >
                                    <ReviewerProfile
                                        reviewerImg={data.reviewerImg}
                                        reviewerName={data.reviewerName}
                                        companyIcon={data.companyIcon}
                                        companyIconAlt={data.companyName}
                                        time={data.postedAt}
                                    />
                                </Box>

                                <Box width={{ md: "50%" }} order={{ md: 3 }}>
                                    <Box m={{ xs: '-36px 0 24px auto', md: '0' }} width={42}>
                                        <ReviewRating
                                            num={data.rating}
                                        />
                                    </Box>
                                    <Box mt={1} mb={{ xs: 1, md: 2 }}>
                                        <EmTypography display="inline" variant='body2' color='textPrimary' children={data.review} />
                                        <Box display="inline" fontSize={14} color="#FFC107" style={{ cursor: 'pointer' }}> View More</Box>

                                    </Box>
                                    <Box display="flex" alignItems="center" flexDirection={{ xs: 'row-reverse', md: 'row' }} width="50%" ml={{ xs: 'auto', md: '0' }} >
                                        <EmButton
                                            variant='outlined'
                                            children="Reply"
                                            color='secondary'
                                        />
                                        <Box m={{ xs: "0 16px 0 0", md: "0 0 0 8px" }}>
                                            <EmTypography
                                                display='inline'
                                                variant='caption'
                                                children={data.numOfReply}
                                                color='textPrimary'
                                            />
                                            <EmTypography
                                                display='inline'
                                                variant='caption'
                                                children=" Reply"
                                                color='textPrimary'
                                            />
                                        </Box>
                                    </Box>
                                </Box>

                                <Box
                                    pr={{ md: 1 }}
                                    width={{ md: "25%" }}
                                    order={{ md: 2 }}
                                >
                                    <Box className='locationColumn' mt={{ xs: '-30px', md: '0' }}>
                                        <IconWithTitle
                                            iconSrc="/images/icons/location.svg"
                                            iconAlt="location"
                                            iconWidth={15}
                                            iconHeight={17}
                                            title={data.location}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )
                })
            }

            <Box mt={3} display="flex" justifyContent="flex-end">
                <EmPagination
                    count={10}
                />
            </Box>
        </>
    )
}

ReviewFilter.propTypes = {
    locationOptionList: PropTypes.array,
    platformOptionList: PropTypes.array,
    sortByOptionList: PropTypes.array,
    reviewData: PropTypes.array,
}

export default ReviewFilter;
