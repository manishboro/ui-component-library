
import React from 'react';
import EmBadges from '.';

export default {
  title: 'Molecules/Badges',
  component: EmBadges,
  argTypes: {
    badgeStyle: {
      control: "select",
      options: ["filled", "outline"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary"],
    },
  },
};

const Template = (args) => <EmBadges {...args} />;

export const Badges = Template.bind({});
Badges.args = {
  badgeContent: 1,
  color: "primary",
  badgeStyle: "outline"
};
