
import React from 'react';
import EmAlert from '.';
export default {
  title: 'Atoms/Alert',
  component: EmAlert,
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined", "standard"],
    },
    severity: {
      control: "select",
      options: ["error", "warning", "info", "success"],
    },
    color: {
      control: "select",
      options: ["error", "warning", "info", "success"],
    },
  }
};

const Template = (args) => <EmAlert {...args} />;

export const Alert = Template.bind({});
Alert.args = {
  variant: "standard",
  color: "success",
  children: "This is an alert Message",
};
