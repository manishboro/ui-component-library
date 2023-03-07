
import React from 'react';
import ReviewerProfile from '.';

export default {
  title: 'Molecules/Review/ReviewerProfiles',
  component: ReviewerProfile,
};

const Template = (args) => <ReviewerProfile {...args} />;

export const ReviewerProfiles = Template.bind({});
ReviewerProfiles.args = {
  variant: "circular",
  avatarSize: "small",
  reviewerImg: "/images/profile-1.jpg",
  reviewerName: "Meverick Paul",
  time: "Today at 4:00 PM"
};
