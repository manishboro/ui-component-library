
import React from 'react';
import EmCheckbox from '.';

export default {
  title: 'Atoms/Checkbox',
  component: EmCheckbox,
  argTypes: {
    labelPlacement: {
      control: "select",
      options: ["top ", "start", "bottom", "end"],
    },
  },
};

const Template = (args) => <EmCheckbox {...args} />;

export const Checkbox = Template.bind({});
Checkbox.args = {
  name: "name",
  value: "name",
  className: "",
  label: "Name",
  labelPlacement: "end",
  disabled: false,
  checked: false,
};
