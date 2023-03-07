

import React from 'react';
import ReviewTemplate from '.';

export default {
    title: 'Templates/ReviewTemplates',
    component: ReviewTemplate,

};

const Template = (args) => <ReviewTemplate {...args} />;

export const ReviewTemplates = Template.bind({});
ReviewTemplates.args = {
    breadcrumbData: [
        { name: "Application", path: "/Application" },
        { name: "Reviews" },
    ],
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