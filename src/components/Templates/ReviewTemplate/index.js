import React from 'react'
import PropTypes from 'prop-types'
import EmBreadcrumb from 'components/Atoms/EmBreadcrumb'
import { Grid } from '@material-ui/core'
import ReviewCard from 'components/Organisms/Review/ReviewCard'
import ReviewProgressCard from 'components/Organisms/Review/ReviewProgressCard'

const ReviewTemplate = ({
    breadcrumbData,
    reviewRatingList
}) => {
    return (
        <div>
            <EmBreadcrumb breadcrumbData={breadcrumbData} />
            <Grid container spacing={2}>
                <Grid item md={3} sm={6}>
                    <ReviewCard />
                </Grid>
                <Grid item md={3} sm={6}>
                    <ReviewCard />
                </Grid>
                <Grid item md={3} sm={6}>
                    <ReviewProgressCard reviewRatingList={reviewRatingList} />
                </Grid>
                <Grid item md={3} sm={6}>
                    <ReviewCard />
                </Grid>
            </Grid>
        </div>
    )
}

ReviewTemplate.propTypes = {
    varian: PropTypes.string,
}

export default ReviewTemplate;
