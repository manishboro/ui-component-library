
import React from 'react';
import EmRadio from '.';

export default {
  title: 'Atoms/Radio',
  component: EmRadio,
  argTypes: {
    labelPlacement: {
      control: "select",
      options: ["top ", "start", "bottom", "end"],
    },
  },
};

const Template = (args) => <EmRadio {...args} />;

export const Radio = Template.bind({});
Radio.args = {
  name: "radioButtonName",
  label: "Radio Button Text",
  value: "radioButton",
  disabled: false,
  errorText: "Error message",
  isError: false,
  onChange: () => { }
};
