

import React from 'react';
import ReviewFilter from '.';

export default {
    title: 'Organisms/Review/ReviewFilters',
    component: ReviewFilter,

};

const Template = (args) => <ReviewFilter {...args} />;

export const ReviewFilters = Template.bind({});
ReviewFilters.args = {
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

    reviews: [
        {
            reviewerName: "Thomas Edison",
            reviewerImg: "/images/profile-1.jpg",
            companyIcon: "/images/icons/google.svg",
            companyName: "google",
            postedAt: "Dec 22 , 2022",
            location: "Toronto ,Canada",
            rating: 4,
            review: "I used to spend hours writing creative copy, but now all I do is tell Rytr what I need and it writes everything for me. It's the ultimate AI content writer, and a must-have tool for bloggers, marketers, & entrepreneurs",
            numOfReply: 2
        },
        {
            reviewerName: "Ruben Baptista",
            reviewerImg: "/images/profile-1.jpg",
            companyIcon: "/images/icons/google.svg",
            companyName: "google",
            postedAt: "Dec 22 , 2022",
            location: "Gulu, Uganda",
            rating: 3,
            review: "When I generate one dummy text it returns only one line. I wish that I can choose many text instead of one line.",
            numOfReply: 2
        },
        {
            reviewerName: "Carter Schleifer",
            reviewerImg: "/images/profile-1.jpg",
            companyIcon: "/images/icons/google.svg",
            companyName: "google",
            postedAt: "Dec 22 , 2022",
            location: "Delhi ,India",
            rating: 5,
            review: "I love this plugin. Thanks. Some improvments: Make it availavle under alt+insert (generate) Make it easier (submenu under alt+insert) to choose style. And remember: The seeker has solitude, but not everyone disturbs it The body of suffering is full of fear. I love this plugin. Thanks. Some improvments: Make it availavle under alt+insert I love this plugin.",
        },
        {
            reviewerName: "Ruben Baptista",
            reviewerImg: "/images/profile-1.jpg",
            companyIcon: "/images/icons/google.svg",
            companyName: "google",
            postedAt: "Dec 22 , 2022",
            location: "Karachi ,Pakistan",
            rating: 1,
            review: "When I generate one dummy text it returns only one line. I wish .",
        },
        {
            reviewerName: "Thomas Edison",
            reviewerImg: "/images/profile-1.jpg",
            companyIcon: "/images/icons/google.svg",
            companyName: "google",
            postedAt: "Dec 22 , 2022",
            location: "Toronto ,Canada",
            rating: 4,
            review: "I used to spend hours writing creative copy, but now all I do is tell Rytr what I need and it writes everything for me. It's the ultimate AI content writer, and a must-have tool for bloggers, marketers, & entrepreneurs",
            numOfReply: 2
        },
        {
            reviewerName: "Ruben Baptista",
            reviewerImg: "/images/profile-1.jpg",
            companyIcon: "/images/icons/google.svg",
            companyName: "google",
            postedAt: "Dec 22 , 2022",
            location: "Gulu, Uganda",
            rating: 3,
            review: "When I generate one dummy text it returns only one line. I wish that I can choose many text instead of one line.",
            numOfReply: 2
        },
        {
            reviewerName: "Carter Schleifer",
            reviewerImg: "/images/profile-1.jpg",
            companyIcon: "/images/icons/google.svg",
            companyName: "google",
            postedAt: "Dec 22 , 2022",
            location: "Delhi ,India",
            rating: 5,
            review: "I love this plugin. Thanks. Some improvments: Make it availavle under alt+insert (generate) Make it easier (submenu under alt+insert) to choose style. And remember: The seeker has solitude, but not everyone disturbs it The body of suffering is full of fear. I love this plugin. Thanks. Some improvments: Make it availavle under alt+insert I love this plugin.",
        },
        {
            reviewerName: "Ruben Baptista",
            reviewerImg: "/images/profile-1.jpg",
            companyIcon: "/images/icons/google.svg",
            companyName: "google",
            postedAt: "Dec 22 , 2022",
            location: "Karachi ,Pakistan",
            rating: 1,
            review: "When I generate one dummy text it returns only one line. I wish .",
        }

    ]
};
