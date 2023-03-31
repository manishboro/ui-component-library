
import React from 'react';
import EmButton from '.';
import AddIcon from '@material-ui/icons/Add';

export default {
  title: 'Atoms/Button',
  component: EmButton,
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "outlined", "contained"],
    },

    size: {
      control: "select",
      options: ["extraSmall", "small", "medium", "large"],
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

export const Button = Template.bind({});
Button.args = {
  children: "Button",
  endIcon: <AddIcon />,
  onClick: () => { },
  href: "",
  textClass: '',
  disabled: false,
  variant: 'contained',
  size: 'small',
  color: 'primary',
  shape: 'square',
  iconOnly: false,
  fullWidth: false,
  fontWeight: 'fw-500',
};
