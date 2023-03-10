
import React from 'react';
import AvatarWithIcon from '.';

export default {
  title: 'Molecules/AvatarWithIcons',
  component: AvatarWithIcon,
};

const Template = (args) => <AvatarWithIcon {...args} />;

export const AvatarWithIcons = Template.bind({});
AvatarWithIcons.args = {
  avatarSrc: "/images/profile-1.jpg",
  avatarAlt: "avatar",
  avatarSize: "medium",
  variant: "circular",
  iconSrc: "/images/icons/google.svg",
  iconAlt: "google",
  iconWidth: 18,
  iconHeight: 18,
  firstLetter: "H"
};
