
import React from 'react';
import ReviewProgressBar from '.';

export default {
  title: 'Molecules/Review/ReviewProgressBars',
  component: ReviewProgressBar,
};

const Template = (args) => <ReviewProgressBar {...args} />;

export const ReviewProgressBars = Template.bind({});
ReviewProgressBars.args = {
  numberOfStar: 5,
  value: 50,
};
