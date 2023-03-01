
import React from 'react';
import AvatarWithIcon from '.';

export default {
  title: 'Molecules/AvatarWithIcons',
  component: AvatarWithIcon,
  argTypes: {
    avatarSize: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    variant: {
      control: "select",
      options: ["circular", "rounded", "square"],
    }
  },
};

const Template = (args) => <AvatarWithIcon {...args} />;

export const AvatarWithIcons = Template.bind({});
AvatarWithIcons.args = {
  variant: "circular",
  avatarSize: "small",
  avatarSrc: "/images/profile-1.jpg",
  iconSrc: "/images/icons/google-icon.svg",
  iconAlt: "google",
  iconWidth: 20,
  iconHeight: 20
};
