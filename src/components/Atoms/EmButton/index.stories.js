
import React from 'react';
import EmButton from '.';

export default {
  title: 'Atoms/Buttons',
  component: EmButton,
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "outlined", "contained"],
    },
    size: {
      control: "select",
      options: ["small", "large"],
    },
    shape: {
      control: "select",
      options: ["normal", "rounded-full", "square"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary"],
    },
  },
};

const Template = (args) => <EmButton {...args} />;

export const Buttons = Template.bind({});
Buttons.args = {
  children: "Button Text",
};
