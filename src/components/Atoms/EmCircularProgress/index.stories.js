
import React from 'react';
import EmCircularProgress from '.';

export default {
  title: 'Atoms/CircularProgress',
  component: EmCircularProgress,
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "inherit"],
    },
  },
};

const Template = (args) => <EmCircularProgress {...args} />;

export const CircularProgress = Template.bind({});
CircularProgress.args = {
  badgeContent: 1,
  color: "primary",
  badgeStyle: "outline"
};
