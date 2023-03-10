
import React from 'react';
import EmAvatar from '.';

export default {
  title: 'Atoms/Avatars',
  component: EmAvatar,
};

const Template = (args) => <EmAvatar {...args} />;

export const Avatars = Template.bind({});
Avatars.args = {
  avatarSrc: "/images/profile-1.jpg",
  avatarAlt: "avatar",
  avatarSize: "medium",
  variant: "circular",
  firstLetter: "H"
};
