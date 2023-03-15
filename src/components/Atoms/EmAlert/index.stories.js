
import React from 'react';
import EmAlert from '.';
import DeleteIcon from '@material-ui/icons/Delete';
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
  variant: "outline",
  color: "success",
  children: "This is an alert Message",
  // icon: <DeleteIcon />
};
