
import React from 'react';
import IconWithTitle from '.';

export default {
  title: 'Molecules/IconWithTitles',
  component: IconWithTitle,
};

const Template = (args) => <IconWithTitle {...args} />;

export const IconWithTitles = Template.bind({});
IconWithTitles.args = {
  iconClass: "",
  iconSrc: "/images/icons/google-icon.svg",
  iconAlt: "google",
  iconWidth: 20,
  iconHeight: 20,
  title: "Music Store Inc"
};
