
import React from 'react';
import EmTypography from '.';

export default {
  title: 'Atoms/Typography',
  component: EmTypography,
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "srOnly"],

    },
    color: {
      control: "select",
      options: ["primary", "secondary", "textPrimary", "textSecondary", "error"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right", "justify"],
    },
    display: {
      control: "select",
      options: ["block", "inline"],
    },
  },
};

const Template = (args) => <EmTypography {...args} />;

export const Typography = Template.bind({});
Typography.args = {
  color: "textPrimary",
  children: "Paragraph",
};
