

import React from 'react';
import ReviewList from '.';

export default {
    title: 'Organisms/ReviewLists',
    component: ReviewList,

};

const Template = (args) => <ReviewList {...args} />;

export const ReviewLists = Template.bind({});
ReviewLists.args = {
    variant: "circular",
    avatarSize: "small",
    avatarSrc: "/images/profile-1.jpg",
    iconSrc: "/images/icons/google-icon.svg",
    iconAlt: "google",
    iconWidth: 20,
    iconHeight: 20,
    starRatingName: "reviewRating",
    starRatingMaxValue: 5,
    starRatingValue: 4.5,
    reviewerName: "Demi Pilot",
    reviewedDate: "26 Feb 2023",
    reviewDescription: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
    reviewedMsg: "Thank you and thank you for stopping by!",
};
