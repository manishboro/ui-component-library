
import React from 'react';
import ReviewRating from '.';

export default {
  title: 'Molecules/Review/ReviewRatings',
  component: ReviewRating,
};

const Template = (args) => <ReviewRating {...args} />;

export const ReviewRatings = Template.bind({});
ReviewRatings.args = {
  num: 1,
};
