
import React from 'react';
import EmDropDown from '.';

export default {
  title: 'Molecules/Dropdown',
  component: EmDropDown,
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined", "standard"],
    },
    size: {
      control: "select",
      options: ["small", "large"],
    },
  },
};

const Template = (args) => <EmDropDown {...args} />;

export const Dropdown = Template.bind({});
Dropdown.args = {
  id: "location",
  variant: "outlined",
  size: "small",
  label: "Location",
  placeholder: "Select Year",
  labelId: "location",
  onChange: () => { },
  errorText: "Error message",
  options: [
    "March 2020 - February 2021",
    "March 2021 - February 2022",
    "March 2022 - February 2023",
  ]
};
