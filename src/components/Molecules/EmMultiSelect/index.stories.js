
import React from 'react';
import EmMultiSelect from '.';

export default {
  title: 'Molecules/MultiSelect',
  component: EmMultiSelect,
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

const Template = (args) => <EmMultiSelect {...args} />;

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  variant: "outlined",
  size: "small",
  label: "Location",
  id: "location",
  labelId: "location",
  errorText: "Error message",
  placeholder: "Select",
  options: [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder"
  ],
};
