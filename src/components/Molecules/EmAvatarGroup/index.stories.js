
import React from 'react';
import EmAvatarGroup from '.';

export default {
  title: 'Molecules/Avatar/AvatarGroup',
  component: EmAvatarGroup,
};

const Template = (args) => <EmAvatarGroup {...args} />;

export const AvatarGroup = Template.bind({});
AvatarGroup.args = {
  maxAvatarDisplay: 6,
  avatarList: [
    {
      avatarSrc: "/images/profile-1.jpg",
      avatarAlt: "Rahul Sharma",
      avatarSize: "medium",
    },
    {
      avatarSrc: "/images/profile-2.j",
      avatarAlt: "Rahul Sharma",
      avatarSize: "medium",
      avatarBgColor: "#E99400"
    },
    {
      avatarSrc: "/images/profile-3.jpg",
      avatarAlt: "Rahul Sharma",
      avatarSize: "medium",
    },
    {
      avatarAlt: "Rahul Sharma",
      avatarSize: "medium",
      avatarBgColor: "#29823B"
    },
    {
      avatarSrc: "/images/profile-4.jpg",
      avatarAlt: "Rahul Sharma",
      avatarSize: "medium",
      avatarBgColor: "#DC2020"
    },
    {
      avatarSrc: "/images/profile-1.jpg",
      avatarAlt: "Rahul Sharma",
      avatarSize: "medium",
      avatarBgColor: "#000"
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
