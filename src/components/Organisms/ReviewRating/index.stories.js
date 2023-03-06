

import React from 'react';
import ReviewRating from '.';

export default {
    title: 'Organisms/ReviewRatings',
    component: ReviewRating,

};

const Template = (args) => <ReviewRating {...args} />;

export const ReviewRatings = Template.bind({});
ReviewRatings.args = {
    ratingName: "reviewRating",
    ratingValue: 4.5,
    maxRating: 5,
    ratingIconSize: "large"
};
