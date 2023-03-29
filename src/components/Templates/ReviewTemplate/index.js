import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import EmBreadcrumb from '../../Atoms/EmBreadcrumb/index';
import EmDropDown from '../../Molecules/EmDropDown/index';
import ReviewCardGroup from '../../../components/Organisms/Review/ReviewCardGroup';
import ReviewFilter from '../../../components/Organisms/Review/ReviewFilter';

const ReviewTemplate = ({
  breadcrumbs,
  yearHandleChange,
  totalReview,
  averageRating,
  reviewRatings,
  fbRecommendation,
  yearDropdownOptions,
  ratingOptions,
  ratingHandleChange,
  platformOptions,
  platformHandleChange,
  sortByOptions,
  sortByHandleChange,
  metricsBtnClick,
  reviews,
  postedBy,
  postedOn,
  postComment,
  onPost
}) => {
  return (
    <Box>
      <Box display="flex" alignItems="center" mb={{ xs: 1.5, md: 2.5 }}>
        <Box width="55%">
          <EmBreadcrumb breadcrumbs={breadcrumbs} />
        </Box>
        <Box width="45%" ml="auto" maxWidth="245px">
          <EmDropDown
            placeholder="Select Year"
            size="large"
            id="reviewDropdown"
            labelId="reviewDropdown"
            options={yearDropdownOptions}
            handleChange={yearHandleChange}
          />
        </Box>
      </Box>

      <ReviewCardGroup totalReview={totalReview} averageRating={averageRating} reviewRatings={reviewRatings} fbRecommendation={fbRecommendation} />

      <ReviewFilter
        ratingOptions={ratingOptions}
        platformOptions={platformOptions}
        sortByOptions={sortByOptions}
        reviews={reviews}
        metricsBtnClick={metricsBtnClick}
        ratingHandleChange={ratingHandleChange}
        platformHandleChange={platformHandleChange}
        sortByHandleChange={sortByHandleChange}
        postedBy={postedBy}
        postedOn={postedOn}
        postComment={postComment}
        onPost={onPost}
      />
    </Box>
  );
};

ReviewTemplate.propTypes = {
  breadcrumbs: PropTypes.array,
  totalReview: PropTypes.object,
  averageRating: PropTypes.object,
  reviewRatings: PropTypes.array,
  fbRecommendation: PropTypes.object,
  yearDropdownOptions: PropTypes.array,
  yearHandleChange: PropTypes.func,
  ratingOptions: PropTypes.array,
  ratingHandleChange: PropTypes.func,
  platformOptions: PropTypes.array,
  platformHandleChange: PropTypes.func,
  sortByOptions: PropTypes.array,
  sortByHandleChange: PropTypes.func,
  metricsBtnClick: PropTypes.func,
  reviews: PropTypes.array,
  postedBy: PropTypes.string,
  postedOn: PropTypes.string,
  postComment: PropTypes.string,
  onPost: PropTypes.func
};

export default ReviewTemplate;
