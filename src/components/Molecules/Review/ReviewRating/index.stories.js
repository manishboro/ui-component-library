
import React from 'react';
import ReviewRating from '.';

export default {
  title: 'Molecules/Review/ReviewRatings',
  component: ReviewRating,
  argTypes: {
    variant: {
      control: "select",
      options: ["high", "medium", "low"],
    },
  }
};

const Template = (args) => <ReviewRating {...args} />;

export const ReviewRatings = Template.bind({});
ReviewRatings.args = {
  num: 1,
  variant: "high"
};
