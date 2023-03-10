
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
  avatarSize: "medium",
  reviewerImg: "/images/profile-1.jpg",
  firstLetter: "N",
  companyIcon: "/images/icons/google.svg",
  companyIconAlt: "google",
  companyIconWidth: 18,
  companyIconHeight: 18,
  reviewerName: "Meverick Paul",
  time: "Dec 22 , 2022"
};
