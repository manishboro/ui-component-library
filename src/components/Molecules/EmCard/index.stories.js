import React from "react";
import EmCard from ".";

export default {
  title: "molecules/Cards",
  component: EmCard,
};

const Template = (args) => <EmCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  backgroundColor: "bg-white",
  cardPadding: "p-4",
  borderRadius: "rounded-md",
  HeadingText: "Card title",
  SecondaryText: "This is Default Card",
  variant: 'default',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  HeadingText: "Card title",
  SecondaryText: "Card with Icon",
  iconSrc: '/images/icons/home.svg',
  iconAlt: 'Home',
};

export const WithImage = Template.bind({});
WithImage.args = {
  HeadingText: "Card title",
  SecondaryText: "This card having Image",
  iconSrc: "/images/card.png",
  iconAlt: "Image Description",
  iconWidth: "80",
  iconHeight: "60",
};

export const WithButton = Template.bind({});
WithButton.args = {
  HeadingText: "Card title",
  SecondaryText: "This card having Image and Button both",
  buttonLabel: 'Button Label',
  imgSrc: "/images/card.png",
  imgAlt: "Image Description",
};