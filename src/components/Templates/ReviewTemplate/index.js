import React from 'react'
import PropTypes from 'prop-types'
import EmBreadcrumb from 'components/Atoms/EmBreadcrumb'
import { Grid } from '@material-ui/core'
import ReviewCard from 'components/Organisms/Review/ReviewCard'
import ReviewProgressCard from 'components/Organisms/Review/ReviewProgressCard'

const ReviewTemplate = ({
    breadcrumbData,
    reviewCardData
}) => {

    return (
        <div>
            <EmBreadcrumb breadcrumbData={breadcrumbData} />
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
        </div>
    )
}

ReviewTemplate.propTypes = {
    varian: PropTypes.string,
}

export default ReviewTemplate;
