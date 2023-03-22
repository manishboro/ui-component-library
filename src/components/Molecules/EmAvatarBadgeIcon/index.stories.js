
import React from 'react';
import EmAvatarBadgeIcon from '.';

export default {
  title: 'Molecules/Avatar/AvatarBadgeIcon',
  component: EmAvatarBadgeIcon,
};

const Template = (args) => <EmAvatarBadgeIcon {...args} />;

export const AvatarBadgeIcon = Template.bind({});
AvatarBadgeIcon.args = {
  avatarSrc: "/images/profile-1.jpg",
  avatarAlt: "Rahul Sharma",
  avatarSize: "medium",
  variant: "circular",
  iconSrc: "/images/icons/google.svg",
  iconAlt: "google",
  iconWidth: 18,
  iconHeight: 18,
};
