

import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import EmBreadcrumb from 'components/Atoms/EmBreadcrumb'
import EmDropDown from 'components/Molecules/EmDropDown'
import ReviewCardGroup from 'components/Organisms/Review/ReviewCardGroup'
import ReviewFilter from 'components/Organisms/Review/ReviewFilter'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 768,
            lg: 1280,
            xl: 1920,
        },
    },
})

const ReviewTemplate = ({
    breadcrumbs,
    totalReview,
    averageRating,
    reviewRatings,
    fbRecommendation,
    yearDropdownOptions,
    locationOptions,
    platformOptions,
    sortByOptions,
    reviews
}) => {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Box display="flex" alignItems={{ xs: "center", md: "flex-start" }} mb={{ xs: 1.5, md: 2.5 }}>
                    <Box width="55%">
                        <EmBreadcrumb breadcrumbs={breadcrumbs} />
                    </Box>
                    <Box width="45%" ml="auto" maxWidth="245px" pt={{ xs: 0, md: "12px" }}>
                        <EmDropDown
                            label="Select Year"
                            size='large'
                            id="reviewDropdown"
                            labelId="reviewDropdown"
                            optionList={yearDropdownOptions}
                        />
                    </Box>
                </Box>

                <ReviewCardGroup
                    totalReview={totalReview}
                    averageRating={averageRating}
                    reviewRatings={reviewRatings}
                    fbRecommendation={fbRecommendation} />

                <ReviewFilter
                    locationOptions={locationOptions}
                    platformOptions={platformOptions}
                    sortByOptions={sortByOptions}
                    reviews={reviews}
                />
            </Box>
        </ThemeProvider>
    )
}

ReviewTemplate.propTypes = {
    breadcrumbs: PropTypes.array,
    totalReview: PropTypes.array,
    averageRating: PropTypes.array,
    reviewRatings: PropTypes.array,
    fbRecommendation: PropTypes.array,
    yearDropdownOptions: PropTypes.array,
    locationOptions: PropTypes.array,
    platformOptions: PropTypes.array,
    sortByOptions: PropTypes.array,
    reviews: PropTypes.array,
}

export default ReviewTemplate;
