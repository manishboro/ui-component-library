
import React from 'react';
import EmAlert from '.';
export default {
  title: 'Molecules/Alert',
  component: EmAlert,
};

const Template = (args) => <EmAlert {...args} />;

export const Alert = Template.bind({});
Alert.args = {
  variant: "outline",
  severity: "success",
  icon: "success",
  color: "success",
  children: "This is an alert-warning"
};
