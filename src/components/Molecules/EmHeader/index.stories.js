
import React from 'react';
import EmHeader from '../EmHeader';

export default {
  title: 'Molecules/Header',
  component: EmHeader,
};

const Template = (args) => <EmHeader {...args} />;

export const Header = Template.bind({});
Header.args = {
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
