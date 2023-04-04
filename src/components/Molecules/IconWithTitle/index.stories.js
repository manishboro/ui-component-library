
import React from 'react';
import IconWithTitle from '.';

export default {
  title: 'Molecules/IconWithTitles',
  component: IconWithTitle,
  argTypes: {
    titleVariant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "srOnly"],

    },
    titleColorType: {
      control: "select",
      options: ["primary", "secondary", "textPrimary", "textSecondary", "error", "custom"],
    },
  }
};

const Template = (args) => <IconWithTitle {...args} />;

export const IconWithTitles = Template.bind({});
IconWithTitles.args = {
  iconClass: "",
  iconSrc: "/images/icons/location.svg",
  iconAlt: "google",
  iconWidth: 20,
  iconHeight: 20,
  title: "Music Store Inc"
};
