
import React from 'react';
import EmRating from '.';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import StarIcon from '@material-ui/icons/Star';

export default {
  title: 'Atoms/Ratings',
  component: EmRating,
};

const Template = (args) => <EmRating {...args} />;

export const StarRatings = Template.bind({});
StarRatings.args = {
  defaultValue: 3,
  max: 5,
  icon: <StarIcon />
};

export const HappyRatings = Template.bind({});
HappyRatings.args = {
  defaultValue: 3,
  max: 5,
  icon: <SentimentSatisfiedAltIcon />,
  precision: 1
};
