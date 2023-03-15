
import React from 'react';
import EmSwitch from '.';
export default {
  title: 'Atoms/Switch',
  component: EmSwitch,
  argTypes: {
    labelPlacement: {
      control: "select",
      options: ["top ", "start", "bottom", "end"],
    },
  }
};

const Template = (args) => <EmSwitch {...args} />;

export const Switch = Template.bind({});
Switch.args = {
  label: "switch"
};
