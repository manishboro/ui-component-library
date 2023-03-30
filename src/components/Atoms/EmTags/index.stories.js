
import React from 'react';
import EmTags from '.';
import EmAvatar from '../EmAvatar';

export default {
  title: 'Atoms/Tags',
  component: EmTags,
  argTypes: {
    variant: {
      control: "select",
      options: ["round ", "soft", "sharp"],
    },
    size: {
      control: "select",
      options: ["small ", "medium", "large"],
    },
    iconPosition: {
      control: "select",
      options: ["left ", "right"],
    },
  },
};

const Template = (args) => <EmTags {...args} />;

export const Tags = Template.bind({});
Tags.args = {
  variant: "round",
  size: "small",
  avatar: <EmAvatar />,
  label: 'Tag',
  isDeleteIcon: false
};
