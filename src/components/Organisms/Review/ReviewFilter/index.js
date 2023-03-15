import React, { useState } from "react";
import PropTypes from 'prop-types'
import IconWithTitle from 'components/Molecules/IconWithTitle'
import { Box, Grid } from '@material-ui/core'
import EmPagination from 'components/Molecules/EmPagination'
import EmTypography from 'components/Atoms/EmTypography'
import EmButton from 'components/Molecules/EmButton'
import ReviewRating from 'components/Molecules/Review/ReviewRating'
import ReviewerProfile from 'components/Molecules/Review/ReviewerProfile'
import ReviewFilterBar from 'components/Molecules/Review/ReviewFilterBar'
import InsertChartOutlinedRoundedIcon from '@material-ui/icons/InsertChartOutlinedRounded';
import "./index.scss"
import usePagination from "../../../Molecules/EmPagination/pagination"

const ReviewFilter = ({
    locationOptions,
    platformOptions,
    sortByOptions,
    reviews
}) => {
    const [page, setPage] = useState(1);
    const PER_PAGE = 5;

    const count = Math.ceil(reviews.length / PER_PAGE);
    const _DATA = usePagination(reviews, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    return (
        <>
            <Box display="flex" alignContent="center" flexWrap="wrap" mt={{ xs: 2.5, md: 3 }}>
                <Box width={{ xs: '100%', md: '70%' }} order={{ xs: 2, md: 1 }} m={{ xs: "24px 0 8px 0", md: "0" }}>
                    <ReviewFilterBar
                        locationOptions={locationOptions}
                        platformOptions={platformOptions}
                        sortByOptions={sortByOptions}
                    />
                </Box>
                <Box className='chartBtn' ml={{ xs: '0', md: 'auto' }} maxWidth={{ xs: '100%', md: '220px' }} width={{ xs: '100%', md: '30%' }} order={{ xs: 1, md: 2 }}>
                    <EmButton
                        variant='outlined'
                        size='medium'
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
                _DATA.currentData().map((data) => {
                    return (
                        <Box borderBottom="1px solid #E5E5EB;" p={{ xs: '16px 0', md: '24px 0' }}>
                            <Box display="flex" flexWrap="wrap" flexDirection={{ xs: "column", md: "row" }}>
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
                                    <Box className='replay-btn' display="flex" alignItems="center" flexDirection={{ xs: 'row-reverse', md: 'row' }} width="50%" ml={{ xs: 'auto', md: '0' }} >
                                        <EmButton
                                            size='medium'
                                            variant='outlined'
                                            children="Reply"
                                            color='secondary'
                                        />
                                        {data.numOfReply &&
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
                                            </Box>}
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
                    page={page}
                    count={count}
                    onChange={handleChange}
                />
            </Box>
        </>
    )
}

ReviewFilter.propTypes = {
    locationOptions: PropTypes.array,
    platformOptions: PropTypes.array,
    sortByOptions: PropTypes.array,
    reviews: PropTypes.array,
}

export default ReviewFilter;
