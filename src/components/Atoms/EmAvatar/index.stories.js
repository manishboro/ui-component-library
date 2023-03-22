
import React from 'react';
import EmAvatar from '.';

export default {
  title: 'Atoms/Avatar',
  component: EmAvatar,
  argTypes: {
    avatarSize: {
      control: "select",
      options: ["extraSmall", "small", "medium", "large"],
    },
    variant: {
      control: "select",
      options: ['circular', 'rounded', 'square'],
    }
  }
};

const Template = (args) => <EmAvatar {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
  avatarSrc: "/images/profile-1.jpg",
  avatarAlt: "Rahul Sharma",
  avatarSize: "medium",
  variant: "circular",
  onClick: () => { },
};
