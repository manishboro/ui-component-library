
import React from 'react';
import EMInputNumber from '.';
export default {
  title: 'Atoms/InputNumber',
  component: EMInputNumber,
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => <EMInputNumber {...args} />;

export const InputNumber = Template.bind({});
InputNumber.args = {
  placeholder: "Number"
};
