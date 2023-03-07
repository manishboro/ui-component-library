
import React from 'react';
import EmDropDown from '.';

export default {
  title: 'Atoms/DropDown',
  component: EmDropDown,
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined", "standard"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => <EmDropDown {...args} />;

export const DropDown = Template.bind({});
DropDown.args = {
  variant: "outlined",
  label: "Location",
  id: "location",
  size: "small"
};
