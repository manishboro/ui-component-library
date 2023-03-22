
import React from 'react';
import EmTags from '.';

export default {
  title: 'Atoms/Tags',
  component: EmTags,
  argTypes: {
    labelPlacement: {
      control: "select",
      options: ["top ", "start", "bottom", "end"],
    },
  },
};

const Template = (args) => <EmTags {...args} />;

export const Tags = Template.bind({});
Tags.args = {
};
