

import React from 'react';
import ReviewProgressCard from '.';

export default {
    title: 'Organisms/Review/ReviewProgressCards',
    component: ReviewProgressCard,

};

const Template = (args) => <ReviewProgressCard {...args} />;

export const ReviewProgressCards = Template.bind({});
ReviewProgressCards.args = {
    reviewRatingList: [
        {
            numberOfStar: 5,
            value: 70,
        },
        {
            numberOfStar: 4,
            value: 12,
        },
        {
            numberOfStar: 3,
            value: 10,
        },
        {
            numberOfStar: 2,
            value: 6,
        },
        {
            numberOfStar: 1,
            value: 2,
        }
    ]
};
