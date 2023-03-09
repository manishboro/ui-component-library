

import React from 'react'
import PropTypes from 'prop-types'
import EmBreadcrumb from 'components/Atoms/EmBreadcrumb'
import { Box } from '@material-ui/core'
import EmDropDown from 'components/Atoms/EmDropDown'
import ReviewCardGroup from 'components/Organisms/Review/ReviewCardGroup'
import ReviewFilter from 'components/Organisms/Review/ReviewFilter'
import "./index.scss";

const ReviewTemplate = ({
    breadcrumbData,
    reviewCardData,
    reviewDropdown,
    locationOptionList,
    platformOptionList,
    sortByOptionList,
    reviewData
}) => {
    return (
        <Box height="100vh" overflow="auto" >
            <Box display="flex" alignItems={{ xs: "center", md: "flex-start" }} mb={{ xs: 1.5, md: 2.5 }}>
                <Box width="55%">
                    <EmBreadcrumb breadcrumbData={breadcrumbData} />
                </Box>
                <Box width="45%" ml="auto" maxWidth="245px" pt={{ xs: 0, md: "12px" }}>
                    <EmDropDown
                        label="Select Year"
                        size='large'
                        id="reviewDropdown"
                        labelId="reviewDropdown"
                        optionList={reviewDropdown}
                    />
                </Box>
            </Box>

            <ReviewCardGroup reviewCardData={reviewCardData} />

            <ReviewFilter
                locationOptionList={locationOptionList}
                platformOptionList={platformOptionList}
                sortByOptionList={sortByOptionList}
                reviewData={reviewData}
            />
        </Box>
    )
}

ReviewTemplate.propTypes = {
    breadcrumbData: PropTypes.array,
    reviewCardData: PropTypes.array,
    reviewDropdown: PropTypes.array,
    locationOptionList: PropTypes.array,
    platformOptionList: PropTypes.array,
    sortByOptionList: PropTypes.array,
    reviewData: PropTypes.array,
}

export default ReviewTemplate;
