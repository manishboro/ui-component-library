
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
  children: "N",
  companyIcon: "/images/icons/google-icon.svg",
  companyIconWidth: 18,
  companyIconHeight: 18,
  reviewerName: "Meverick Paul",
  time: "Dec 22 , 2022"
};
