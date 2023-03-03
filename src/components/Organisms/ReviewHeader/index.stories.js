

import React from 'react';
import ReviewHeader from '.';

export default {
    title: 'Organisms/ReviewHeaders',
    component: ReviewHeader,

};

const Template = (args) => <ReviewHeader {...args} />;

export const ReviewHeaders = Template.bind({});
ReviewHeaders.args = {
    title: 131,
    match: {
        "path": "/app/Review",
        "url": "/app/review",
    },
    ratingName: "reviewRating",
    ratingValue: 4.5,
    maxRating: 5,
    ratingIconSize: "large"
};
