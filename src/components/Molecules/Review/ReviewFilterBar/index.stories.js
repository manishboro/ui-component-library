
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
  locationOptions: [
    'label1',
    'label2',
    'label3',
  ],
  platformOptions: [
    'label1',
    'label2',
    'label3',
  ],
  sortByOptions: [
    'label1',
    'label2',
    'label3',
  ],
  locationHandleChange: () => { },
  platformHandleChange: () => { },
  sortByHandleChange: () => { }

};
