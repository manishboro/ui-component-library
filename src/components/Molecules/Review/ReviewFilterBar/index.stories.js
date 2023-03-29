
import React from 'react';
import ReviewFilterBar from '.';

export default {
  title: 'Molecules/Review/ReviewFilterBars',
  component: ReviewFilterBar,
};

const Template = (args) => <ReviewFilterBar {...args} />;

export const ReviewFilterBars = Template.bind({});
ReviewFilterBars.args = {
  numberOfStar: 5,
  value: 50,
  ratingOptions: [
    '5 Star',
    '4 Star',
    '3 Star',
    '2 Star',
    '1 Star',
  ],
  platformOptions: [
    "Google",
    "Yahoo",
    "Facebook",
    "Glassdoor",
  ],
  sortByOptions: [
    'label1',
    'label2',
    'label3',
  ],
  ratingHandleChange: () => { },
  platformHandleChange: () => { },
  sortByHandleChange: () => { }

};
