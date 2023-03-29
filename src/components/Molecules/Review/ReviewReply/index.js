import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import EmTypography from 'components/Atoms/EmTypography';

const ReviewReply = ({
  postedBy,
  postedOn,
  postComment,
  show = false,
  close,
  margin
}) => {
  if (!show) return null
  return (
    <Box bgcolor="#F3F3F6" padding="12px 16px 24px" m={margin}>
      <Box display='flex' alignItems='center' justifyContent="space-between" mb="8px">
        <Box color="#4B4B63">
          <EmTypography classes="postedBy" variant='body1' color='' children={postedBy} />
        </Box>

        <EmTypography variant="caption" color="textSecondary">
          Posted on {postedOn}
        </EmTypography>
      </Box>

      <EmTypography variant="body1" color="textSecondary" children={postComment} />
    </Box>
  );
};

ReviewReply.propTypes = {
  postedBy: PropTypes.string,
  postedOn: PropTypes.string,
  postComment: PropTypes.string,
  show: PropTypes.bool,
  close: PropTypes.func,
};

export default ReviewReply;
