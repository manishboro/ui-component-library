
import React from 'react';
import EmAvatarGroup from '.';

export default {
  title: 'Molecules/Avatar/AvatarGroup',
  component: EmAvatarGroup,
};

const Template = (args) => <EmAvatarGroup {...args} />;

export const AvatarGroup = Template.bind({});
AvatarGroup.args = {
  avatarList: [
    {
      avatarSrc: "/images/profile-1.jpg",
      avatarAlt: "Rahul Sharma",
      avatarSize: "medium",
    },
    {
      avatarSrc: "/images/profile-2.jpg",
      avatarAlt: "Rahul Sharma",
      avatarSize: "medium",
    },
    {
      avatarSrc: "/images/profile-3.jpg",
      avatarAlt: "Rahul Sharma",
      avatarSize: "medium",
    },
    {
      avatarSrc: "/images/profile-1.jpg",
      avatarAlt: "Rahul Sharma",
      avatarSize: "medium",
    },
    {
      avatarSrc: "/images/profile-2.jpg",
      avatarAlt: "Rahul Sharma",
      avatarSize: "medium",
    },
    {
      avatarSrc: "/images/profile-3.jpg",
      avatarAlt: "Rahul Sharma",
      avatarSize: "medium",
    }
  ]
};
