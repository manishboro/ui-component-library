
import React from 'react';
import EmInputField from '.';

export default {
  title: 'Atoms/InputField',
  component: EmInputField,
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "standard"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => <EmInputField {...args} />;

export const InputFields = Template.bind({});
InputFields.args = {
  id: "name",
  className: "",
  label: "Name",
  type: "text",
  size: "medium",
  placeholder: "Name",
  errorText: "Error message",
  isAnimated: true
};

export const AnimatedLabel = Template.bind({});
AnimatedLabel.args = {
  variant: 'standard',
  id: "name",
  className: "",
  label: "Name",
  type: "text",
  size: "medium",
  placeholder: "Name",
  errorText: "Error message",
};

export const InputFieldsWithoutLabel = Template.bind({});
InputFieldsWithoutLabel.args = {
  id: "name",
  className: "",
  type: "text",
  size: "medium",
  placeholder: "Name",
  errorText: "Error message",
};
