import React from 'react';
import PropTypes from 'prop-types';
import EmInputField from 'components/Atoms/EmInputField';
import EmButton from 'components/Atoms/EmButton';
import { Box } from '@material-ui/core';
import "./index.scss"

const ReviewReplyPost = ({
  id = "reviewReplyPost",
  error,
  value,
  placeholder = "Write a Reply",
  minRows = 3,
  maxRows = 3,
  size = "large",
  errorText = "Error message",
  show = false,
  close,
  onPost,
  margin
}) => {
  if (!show) return null
  return (
    <Box className='review-replyPost' m={margin} color="#6B6B80">
      <EmInputField
        id={id}
        multiline={true}
        minRows={minRows}
        maxRows={maxRows}
        placeholder={placeholder}
        error={error}
        value={value}
        size={size}
        errorText={errorText}
      />
      <Box display="flex" justifyContent="flex-end" mt="16px">
        <EmButton variant='outlined' size='medium' children="Cancel" onClick={close} />
        <Box ml="16px">
          <EmButton variant='contained' size='medium' children="Post" onClick={onPost} />
        </Box>
      </Box>
    </Box>
  );
};

ReviewReplyPost.propTypes = {
  id: PropTypes.string,
  error: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
  size: PropTypes.string,
  errorText: PropTypes.string,
  show: PropTypes.bool,
  close: PropTypes.func,
  onPost: PropTypes.func,
};

export default ReviewReplyPost;
