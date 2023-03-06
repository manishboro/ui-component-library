

import React from 'react';
import ReviewTemplate from '.';

export default {
    title: 'Templates/ReviewTemplates',
    component: ReviewTemplate,

};

const Template = (args) => <ReviewTemplate {...args} />;

export const ReviewTemplates = Template.bind({});
ReviewTemplates.args = {
    ratingName: "ReviewTemplate",
    ratingValue: 4.5,
    maxRating: 5,
    ratingIconSize: "large"
};
