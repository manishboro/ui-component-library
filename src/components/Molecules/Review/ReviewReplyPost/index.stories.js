
import React from 'react';
import ReviewReplyPost from '.';

export default {
  title: 'Molecules/Review/ReviewsReplyPost',
  component: ReviewReplyPost,
};

const Template = (args) => <ReviewReplyPost {...args} />;

export const ReviewsReplyPost = Template.bind({});
ReviewsReplyPost.args = {
  id: "reviewReplyPost",
  placeholder: "Write a Reply",
  minRows: 5,
  maxRows: 5,
  size: "small",
  errorText: "Error message",
  show: true,
  close: () => { },
  onPost: () => { }
};
