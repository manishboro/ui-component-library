
import React from 'react';
import ProfileDropDown from '../ProfileDropDown';

export default {
  title: 'Molecules/ProfileDropDowns',
  component: ProfileDropDown,
};

const Template = (args) => <ProfileDropDown {...args} />;

export const ProfileDropDowns = Template.bind({});
ProfileDropDowns.args = {
  avatarSrc: "/images/profile-1.jpg",
  avatarAlt: "Rahul Sharma",
  avatarSize: "small",
  variant: "circular",
  userName: "Vikram Singh",
  profileDropdownOptions: [
    { label: 'Profile' },
    { label: 'My Account' },
    { label: 'Logout' }
  ],
};
