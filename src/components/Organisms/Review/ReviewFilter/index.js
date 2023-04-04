import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconWithTitle from '../../../Molecules/IconWithTitle';
import { Box } from '@material-ui/core';
import EmPagination from '../../../Molecules/EmPagination';
import EmTypography from '../../../Atoms/EmTypography';
import EmButton from '../../../Atoms/EmButton';
import ReviewRating from '../../../Molecules/Review/ReviewRating';
import ReviewerProfile from '../../../Molecules/Review/ReviewerProfile';
import ReviewFilterBar from '../../../Molecules/Review/ReviewFilterBar';
import InsertChartOutlinedRoundedIcon from '@material-ui/icons/InsertChartOutlinedRounded';
import usePagination from '../../../Molecules/EmPagination/pagination';
import ReviewReplyPost from 'components/Molecules/Review/ReviewReplyPost';
import ReviewReply from 'components/Molecules/Review/ReviewReply';
import './index.scss';

const ReviewFilter = ({
  ratingOptions,
  ratingHandleChange,
  platformOptions,
  platformHandleChange,
  searchOnChange,
  metricsBtnClick,
  reviews,
  postedBy,
  postedOn,
  postComment,
  onPost
}) => {
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(reviews.length / PER_PAGE);
  const _DATA = usePagination(reviews, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const [showReplyPost, setShowReplyPost] = useState(false);
  const [showReply, setShowReply] = useState(false);

  return (
    <>
      <Box display="flex" alignItems="center" flexWrap="wrap" mt={{ xs: 2.5, md: 1.5 }}>
        <Box width={{ xs: '100%', md: '70%' }} order={{ xs: 2, md: 1 }} m={{ xs: '24px 0 8px 0', md: '0' }}>
          <ReviewFilterBar
            ratingOptions={ratingOptions}
            platformOptions={platformOptions}
            ratingHandleChange={ratingHandleChange}
            platformHandleChange={platformHandleChange}
            searchOnChange={searchOnChange}
          />
        </Box>
        <Box
          className="chartBtn"
          ml={{ xs: '0', md: 'auto' }}
          maxWidth={{ xs: '100%', md: '220px' }}
          width={{ xs: '100%', md: '30%' }}
          order={{ xs: 1, md: 2 }}
        >
          <EmButton
            variant="outlined"
            size="medium"
            children="View Detailed Metrics"
            endIcon={<InsertChartOutlinedRoundedIcon style={{ fontSize: '18px' }} />}
            fullWidth={{ xs: true, md: false }}
            onClick={metricsBtnClick}
          />
        </Box>
      </Box>

      {_DATA.currentData().map(data => {
        return (
          <Box className='reviewfilter' borderBottom="1px solid #E5E5EB;" p={{ xs: '16px 0', md: '24px 0' }}>
            <Box className="reviewer-profile" display='flex' alignItems='center' justifyContent='space-between'>
              <ReviewerProfile
                reviewerImg={data.reviewerImg}
                reviewerName={data.reviewerName}
                companyIcon={data.companyIcon}
                companyIconAlt={data.companyName}
                time={data.postedAt}
              />
              <ReviewRating num={data.rating} />
            </Box>

            <Box mt={{ md: "12px", xs: "10px" }} mb="8px" color="#373751">
              <EmTypography >
                {data.review} <Box display="inline" fontSize={14} color="#FFC107" style={{ cursor: 'pointer' }}>
                  View More
                </Box>
              </EmTypography>
            </Box>
            <Box display='flex' justifyContent="space-between" alignItems='center'>
              <Box>
                <IconWithTitle iconSrc="/images/icons/location.svg" iconAlt="location" iconWidth={15} iconHeight={17} title={data.location} spaceBetween="6px" bottomSpace="2px" />
              </Box>
              {!showReplyPost && <Box
                className="replay-btn"
                display="flex"
                alignItems="center"
              >
                {data.numOfReply && (
                  <Box display='flex' m='0 16px 0 0' onClick={() => { setShowReply(!showReply) }} style={{ "cursor": "pointer" }}>
                    <EmTypography display="inline" variant="body2"> {showReply ? "hide" : data.numOfReply} Reply</EmTypography>
                  </Box>
                )}
                <EmButton size="medium" variant="outlined" children={data.numOfReply ? "Edit Reply" : "Reply"} color="secondary" onClick={() => { setShowReplyPost(true) }} />
              </Box>}

            </Box>

            <ReviewReplyPost
              id="reviewReplyPost"
              show={showReplyPost}
              close={() => { setShowReplyPost(false) }}
              onPost={onPost}
              margin="12px 0 0 0"
            />

            <ReviewReply
              postedBy={postedBy}
              postedOn={postedOn}
              postComment={postComment}
              show={showReply}
              close={() => { setShowReply(false) }}
              margin="16px 0 0 0"
            />
          </Box>
        );
      })}

      <Box mt={3} display="flex" justifyContent="flex-end">
        <EmPagination page={page} count={count} onChange={handleChange} />
      </Box>
    </>
  );
};

ReviewFilter.propTypes = {
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

export default ReviewFilter;
