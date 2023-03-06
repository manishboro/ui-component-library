
import React from 'react';
import ReviewerProfile from '.';

export default {
  title: 'Molecules/ReviewerProfiles',
  component: ReviewerProfile,
};

const Template = (args) => <ReviewerProfile {...args} />;

export const ReviewerProfiles = Template.bind({});
ReviewerProfiles.args = {
  variant: "circular",
  avatarSize: "small",
  reviewerImg: "/images/profile-1.jpg",
};
