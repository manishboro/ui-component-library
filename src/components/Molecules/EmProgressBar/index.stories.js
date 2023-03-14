
import React from 'react';
import EmProgressBar from '.';

export default {
  title: 'Molecules/ProgressBar',
  component: EmProgressBar,
  argTypes: {
    type: {
      control: "select",
      options: ["rounded", "soft", "sharp"],
    },
    size: {
      control: "select",
      options: ["default", "small"],
    },
  },

};

const Template = (args) => <EmProgressBar {...args} />;

export const ProgressBar = Template.bind({});
ProgressBar.args = {
  label: "On Going",
  value: 50,
};
