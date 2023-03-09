import React from 'react'
import PropTypes from 'prop-types'
import EmBreadcrumb from 'components/Atoms/EmBreadcrumb'
import { Box, Grid } from '@material-ui/core'
import ReviewCard from 'components/Organisms/Review/ReviewCard'
import ReviewProgressCard from 'components/Organisms/Review/ReviewProgressCard'
import EmDropDown from 'components/Atoms/EmDropDown'
import ReviewFilterBar from 'components/Molecules/Review/ReviewFilterBar'
import EmButton from 'components/Atoms/EmButton'

const ReviewTemplate = ({
    breadcrumbData,
    reviewCardData,
    reviewDropdown,
    locationOptionList,
    platformOptionList,
    sortByOptionList
}) => {
    const MetricsIcon = () => (
        <div>
            <img src='/images/icons/chart.svg' width="16" height="16" alt="chart" />
        </div>
    );

    return (
        <Box bgcolor="#FFF" p={4}>
            <EmBreadcrumb breadcrumbData={breadcrumbData} />
            <Box mb={2.5} ml="auto" maxWidth="245px">
                <EmDropDown
                    label="March 2022 - February 2023"
                    size='large'
                    id="reviewDropdown"
                    labelId="reviewDropdown"
                    optionList={reviewDropdown}
                />
            </Box>

            <Grid container spacing={2}>
                {reviewCardData.map((list, index) => (
                    <Grid item md={3} sm={6}>
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

                    </Grid>
                ))}
            </Grid>

            <Box display="flex" mt={4}>
                <ReviewFilterBar
                    locationOptionList={locationOptionList}
                    platformOptionList={platformOptionList}
                    sortByOptionList={sortByOptionList}
                />
                <Box ml="auto" width="220px">
                    <EmButton
                        variant='outlined'
                        children="View Detailed Metrics"
                        endIcon={<MetricsIcon />}
                    />
                </Box>
            </Box>

            <Box mt={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        Reviwer
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        Location
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        Rating and Review
                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}

ReviewTemplate.propTypes = {
    varian: PropTypes.string,
}

export default ReviewTemplate;
