import React from "react";
import EmCard from ".";

export default {
  title: "molecules/Cards",
  component: EmCard,
  variant: {
    control: "select",
    options: ['default', 'cardWithIcon', 'cardWithImage', 'cardWithImage'],
  },
};

const Template = (args) => <EmCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  HeadingText: "Card title",
  SecondaryText: "This is Default Card",
  variant: 'default',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: 'cardWithIcon',
  HeadingText: "Card title",
  SecondaryText: "Card with Icon",
  iconSrc: '/images/icons/home.svg',
  iconAlt: 'Home',
  rounded: false
};

export const WithImage = Template.bind({});
WithImage.args = {
  variant: 'cardWithImage',
  HeadingText: "Card title",
  SecondaryText: "This card having Image",
  iconSrc: "/images/card.png",
  iconAlt: "Image Description",
  iconHeight: "60",
};

export const WithButton = Template.bind({});
WithButton.args = {
  variant: 'cardWithButton',
  HeadingText: "Card title",
  SecondaryText: "This card having Image and Button both",
  buttonLabel: 'Button Label',
  imgSrc: "/images/card.png",
  imgAlt: "Image Description",
  cardBtnClick: () => { }
};