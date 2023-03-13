
import React from 'react';
import EmCheckbox from '.';

export default {
  title: 'Molecules/Checkbox',
  component: EmCheckbox,
  argTypes: {
    labelPlacement: {
      control: "select",
      options: ["top ", "start", "bottom", "end"],
    },
    color: {
      control: "select",
      options: ["primary ", "secondary"],
    },
  },
};

const Template = (args) => <EmCheckbox {...args} />;

export const Checkbox = Template.bind({});
Checkbox.args = {
  id: "name",
  className: "",
  label: "Name",
  type: "text",
  size: "normal",
  placeholder: "Name",
  labelPlacement: "end",
  color: "primary"
};
