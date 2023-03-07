

import React from 'react';
import ReviewCard from '.';

export default {
    title: 'Organisms/Review/ReviewCards',
    component: ReviewCard,

};

const Template = (args) => <ReviewCard {...args} />;

export const ReviewCards = Template.bind({});
ReviewCards.args = {
    reviewCardIconClass: "",
    iconSrc: "/images/icons/edit.svg",
    iconAlt: "Total Reviews",
    heading: "Total Reviews",
    value: 150,
};
