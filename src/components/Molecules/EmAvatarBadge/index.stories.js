
import React from 'react';
import EmAvatarBadge from '.';

export default {
  title: 'Molecules/Avatar/AvatarBadge',
  component: EmAvatarBadge,
  argTypes: {
    avatarSize: {
      control: "select",
      options: ["extraSmall", "small", "medium", "large"],
    },
    variant: {
      control: "select",
      options: ['circular', 'rounded', 'square'],
    },
    badgeVariant: {
      control: "select",
      options: ['standard', 'dot']
    }
  }
};

const Template = (args) => <EmAvatarBadge {...args} />;

export const AvatarBadge = Template.bind({});
AvatarBadge.args = {
  avatarSrc: "/images/profile-1.jpg",
  avatarAlt: "Rahul Sharma",
  avatarSize: "medium",
  variant: "circular",
  onClick: () => { },
  badgeCount: 20,
  badgeVariant: 'standard'
};
