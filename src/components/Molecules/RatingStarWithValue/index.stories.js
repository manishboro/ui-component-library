
import React from 'react';
import RatingStarWithValue from '.';

export default {
  title: 'Molecules/RatingStarWithValues',
  component: RatingStarWithValue,
};

const Template = (args) => <RatingStarWithValue {...args} />;

export const RatingStarWithValues = Template.bind({});
RatingStarWithValues.args = {
  ratingName: "reviewRating",
  ratingValue: 4.5,
  maxRating: 5,
  ratingIconSize: "large"
};
