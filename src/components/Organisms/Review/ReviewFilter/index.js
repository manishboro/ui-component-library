import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconWithTitle from '../../../Molecules/IconWithTitle';
import { Box } from '@material-ui/core';
import EmTypography from '../../../Atoms/EmTypography';
import EmButton from '../../../Atoms/EmButton';
import ReviewRating from '../../../Molecules/Review/ReviewRating';
import ReviewerProfile from '../../../Molecules/Review/ReviewerProfile';
import ReviewFilterBar from '../../../Molecules/Review/ReviewFilterBar';
import InsertChartOutlinedRoundedIcon from '@material-ui/icons/InsertChartOutlinedRounded';
import ReviewReplyPost from 'components/Molecules/Review/ReviewReplyPost';
import ReviewReply from 'components/Molecules/Review/ReviewReply';
import './index.scss';
import EmCircularProgress from 'components/Atoms/EmCircularProgress';

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
  onPost,
  shareHandler,
  deleteHandler,

}) => {

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

      {reviews.map(data => {
        return (
          <Box className='reviewFilter' borderBottom="1px solid #E5E5EB;" p={{ xs: '16px 0', md: '28px 0' }}>
            <Box className="reviewer-profile" display='flex' alignItems='center' justifyContent='space-between'>
              <ReviewerProfile
                reviewerImg={data.reviewerImg}
                reviewerName={data.reviewerName}
                companyIcon={data.companyIcon}
                companyIconAlt={data.companyName}
                time={data.postedAt}
              />

              {!data.isFacebook && <ReviewRating num={data.rating} />}
              {data.isFacebook && <Box className='fb-recommended' ml="20px">
                {data.isFacebookType === "recommended" ? <IconWithTitle iconSrc="/images/icons/ticketStar-pink.svg" iconAlt="ticketStar" iconWidth={20} iconHeight={18} title="Recommended" titleVariant="body2" titleColor='#FC2170' spaceBetween="8px" /> : <IconWithTitle iconSrc="/images/icons/ticketStar-gray.svg" iconAlt="ticketStar" iconWidth={20} iconHeight={18} title="Not Recommended" titleVariant="body2" titleColor='#868E96' spaceBetween="8px" />}
              </Box>}

            </Box>

            <Box mt={{ xs: "10px", md: "12px" }} mb="8px">
              <EmTypography color='custom' children={data.review} textColor="#373751" />
            </Box>

            <Box display='flex' alignItems='center' flexWrap='wrap'>
              <Box width={{ xs: "100%", sm: "auto" }} mt={{ xs: "6px", sm: 0 }}>
                <IconWithTitle iconSrc="/images/icons/location.svg" iconAlt="location" iconWidth={15} iconHeight={17} title={data.location} titleColor='#9299A1' spaceBetween="4px" bottomSpace="2px" />
              </Box>

              <Box className='actionBtn' display='flex' width={{ xs: "40%", sm: "auto" }} mt={{ xs: "6px", sm: 0 }}>
                <Box ml={{ xs: "0", sm: "20px" }} onClick={shareHandler} style={{ "cursor": "pointer" }}><IconWithTitle iconSrc="/images/icons/share.svg" iconAlt="share" iconWidth={15} iconHeight={17} title="Share" titleColor='#373751' spaceBetween="6px" bottomSpace="2px" /></Box>
                {!data.isFacebook && <Box ml={{ xs: "10px", sm: "20px" }} onClick={deleteHandler} style={{ "cursor": "pointer" }}><IconWithTitle iconSrc="/images/icons/delete.svg" iconAlt="delete" iconWidth={15} iconHeight={17} title="Delete" titleColor='#373751' spaceBetween="6px" bottomSpace="2px" /></Box>}
              </Box>

              {!showReplyPost && <Box
                className="replay-btn"
                display="flex"
                alignItems="center"
                ml="auto"
                mt={{ xs: "6px", sm: 0 }}
              >
                {data.numOfReply && (
                  <Box display='flex' m='0 16px 0 0' onClick={() => { setShowReply(!showReply) }} style={{ "cursor": "pointer" }}>
                    <EmTypography display="inline" variant="body2"> {showReply ? "Hide" : "View"} Reply</EmTypography>
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
              margin="16px 0 -16px 0"
            />
          </Box>
        );
      })}
      <Box textAlign="center" mt="40px">
        <EmCircularProgress size={40} />
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
  onPost: PropTypes.func,
  isDelete: PropTypes.bool,
  shareHandler: PropTypes.func,
  deleteHandler: PropTypes.func
};

export default ReviewFilter;
