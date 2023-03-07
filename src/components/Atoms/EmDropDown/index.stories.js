
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
      options: ["small", "large"],
    },
  },
};

const Template = (args) => <EmDropDown {...args} />;

export const DropDown = Template.bind({});
DropDown.args = {
  variant: "outlined",
  size: "small",
  label: "Location",
  id: "location",
  labelId: "location",
  handleChange: () => { },
  multiple: false,
  optionList: [
    { value: 'value1', label: 'March 2020 - February 2021' },
    { value: 'value2', label: 'March 2021 - February 2022' },
    { value: 'value3', label: 'March 2022 - February 2023' }
  ],
};
