

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
    ratingName: "reviewRating",
    maxRating: 5,
    ratingValue: 4.5,
    ratingIconSize: "small",
    reviewerName: "Demi Pilot",
    reviewedDate: "26 Feb 2023",
    reviewDescription: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
    reviewedMsg: "Thank you and thank you for stopping by!",
    title: "Music Store Inc",
    iconSrc: "/images/icons/google-icon.svg",
    iconAlt: "location",
    iconWidth: 10,
    iconHeight: 10,
    titleSize: "text-xs"
};
