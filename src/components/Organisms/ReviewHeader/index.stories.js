

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
    starRatingName: "reviewRating",
    starRatingMaxValue: 5,
    starRatingValue: 4.5,
};
