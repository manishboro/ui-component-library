import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import EmBreadcrumb from '../../Atoms/EmBreadcrumb/index';
import ReviewCardGroup from '../../../components/Organisms/Review/ReviewCardGroup';
import ReviewFilter from '../../../components/Organisms/Review/ReviewFilter';
import EmDateRangePicker from 'components/Molecules/EmDateRangePicker';

const ReviewTemplate = ({
  breadcrumbs,
  totalReview,
  averageRating,
  reviewRatings,
  fbRecommendation,
  ratingOptions,
  ratingHandleChange,
  platformOptions,
  platformHandleChange,
  searchOnChange,
  sortByHandleChange,
  metricsBtnClick,
  reviews,
  postedBy,
  postedOn,
  postComment,
  onPost,
  shareHandler,
  deleteHandler
}) => {
  return (
    <Box>
      <Box display="flex" alignItems="center" mb={{ xs: 1.5, md: 1.5 }} flexWrap="wrap">
        <Box width={{ xs: "100%", sm: "55%" }}>
          <EmBreadcrumb breadcrumbs={breadcrumbs} />
        </Box>
        <Box textAlign="right" m={{ xs: "10px 0 0", sm: "0 0 0 auto" }} maxWidth={{ xs: "100%", sm: "245px" }} width={{ xs: "100%", sm: "45%" }} >
          <EmDateRangePicker alignment="right" />
        </Box>
      </Box>

      <ReviewCardGroup totalReview={totalReview} averageRating={averageRating} reviewRatings={reviewRatings} fbRecommendation={fbRecommendation} />

      <ReviewFilter
        ratingOptions={ratingOptions}
        platformOptions={platformOptions}
        searchOnChange={searchOnChange}
        reviews={reviews}
        metricsBtnClick={metricsBtnClick}
        ratingHandleChange={ratingHandleChange}
        platformHandleChange={platformHandleChange}
        sortByHandleChange={sortByHandleChange}
        postedBy={postedBy}
        postedOn={postedOn}
        postComment={postComment}
        onPost={onPost}
        shareHandler={shareHandler}
        deleteHandler={deleteHandler}
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
