
import React from 'react';
import EmTimeline from '.';
export default {
  title: 'Molecules/Timeline',
  component: EmTimeline,
  argTypes: {
    align: {
      control: "select",
      options: ['left', 'right', 'alternate'],
    },
  }
};

const Template = (args) => <EmTimeline {...args} />;

const timeLineLists = [
  {
    date: "Today",
    title: "Pending Approval",
    desc: "This request requires your approval."
  },
  {
    date: "May 19, 2018",
    title: "Approval Requested",
    desc: "John Lloyd has requested your approval."
  },
  {
    date: "2018",
    title: "Request Created",
    desc: "Request created by Kim May."
  },
];
export const Timeline = Template.bind({});
Timeline.args = {
  timeLineLists,
  isIcon: true
};
