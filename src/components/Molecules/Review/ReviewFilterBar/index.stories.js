
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
    { value: 'value1', label: 'label1' },
    { value: 'value2', label: 'label2' },
    { value: 'value3', label: 'label3' }
  ],
  platformOptions: [
    { value: 'value1', label: 'label1' },
    { value: 'value2', label: 'label2' },
    { value: 'value3', label: 'label3' }
  ],
  sortByOptions: [
    { value: 'value1', label: 'label1' },
    { value: 'value2', label: 'label2' },
    { value: 'value3', label: 'label3' }
  ],
  locationHandleChange: () => { },
  platformHandleChange: () => { },
  sortByHandleChange: () => { }

};
