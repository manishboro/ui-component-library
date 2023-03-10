
import React from 'react';
import EmHeader from '../EmHeader';

export default {
  title: 'Molecules/EmHeaders',
  component: EmHeader,
};

const Template = (args) => <EmHeader {...args} />;

export const EmHeaders = Template.bind({});
EmHeaders.args = {
  avatarSrc: "/images/profile-1.jpg",
  avatarAlt: "avatar",
  avatarSize: "small",
  variant: "circular",
  firstLetter: "H",
  userName: "Vikram Singh",
  profileDropDownList: [
    { label: 'Profile' },
    { label: 'My Account' },
    { label: 'Logout' }
  ],
};
