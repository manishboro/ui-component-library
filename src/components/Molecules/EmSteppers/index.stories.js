
import React from 'react';
import EmSteppers from '.';
export default {
  title: 'Molecules/Steppers',
  component: EmSteppers,
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    types: {
      control: "select",
      options: ["icon", "noIcon", "empty"],
    },
    position: {
      control: "select",
      options: ["top", "bottom"],
    },
  },
};

const Template = (args) => <EmSteppers {...args} />;

const steps = [
  {
    label: `Past Step`,
  },
  {
    label: `Active Step`,
  },
  {
    label: `Next Step`,
  },
];

export const Steppers = Template.bind({});
Steppers.args = {
  steps,
};
