
import React from 'react';
import EmInputField from '.';

export default {
  title: 'Molecules/InputField',
  component: EmInputField,
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined", "standard"],
    },
    size: {
      control: "select",
      options: ["small", "large"],
    },
    type: {
      control: "select",
      options: ["text", "number", "password"],
    },
  },
};

const Template = (args) => <EmInputField {...args} />;

export const InputField = Template.bind({});
InputField.args = {
  id: "name",
  className: "",
  label: "Name",
  type: "text",
  size: "normal",
  placeholder: "Name",
};
