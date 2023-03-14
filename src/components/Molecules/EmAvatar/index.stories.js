
import React from 'react';
import EmAvatar from '.';

export default {
  title: 'Molecules/Avatar',
  component: EmAvatar,
  argTypes: {
    avatarSize: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    variant: {
      control: "select",
      options: ['circular', 'rounded', 'square'],
    },
  }
};

const Template = (args) => <EmAvatar {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
  avatarSrc: "/images/profile-1.jpg",
  avatarAlt: "avatar",
  avatarSize: "medium",
  variant: "circular",
  firstLetter: "H"
};
