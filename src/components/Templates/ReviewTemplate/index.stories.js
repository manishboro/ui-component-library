

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
    reviewCardData: [
        {
            type: "reviewCard",
            iconSrc: "/images/icons/edit.svg",
            iconAlt: "Reviews",
            heading: "Total Reviews",
            value: 150,
        },
        {
            type: "reviewCard",
            iconSrc: "/images/icons/favorite.svg",
            iconAlt: "Reviews",
            heading: "Average Rating",
            value: 4,
        },
        {
            type: "reviewProgressCard",
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
        },
        {
            type: "reviewCard",
            iconSrc: "/images/icons/recommendations.svg",
            iconAlt: "Facebook",
            heading: "Facebook Recommendations",
            value: 30,
        }
    ],

};