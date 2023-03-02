
import React from 'react';
import AvatarWithIcon from '.';

export default {
  title: 'Molecules/AvatarWithIcons',
  component: AvatarWithIcon,
};

const Template = (args) => <AvatarWithIcon {...args} />;

export const AvatarWithIcons = Template.bind({});
AvatarWithIcons.args = {
  variant: "circular",
  avatarSize: "small",
  avatarSrc: "/images/profile-1.jpg",
  companyIconSrc: "/images/icons/google-icon.svg",
  companyIconAlt: "google",
  companyIconWidth: 20,
  companyIconHeight: 20
};
