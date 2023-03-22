
import React from 'react';
import EmTabs from '.';
export default {
  title: 'Molecules/Tabs',
  component: EmTabs,
  argTypes: {
    tabVariant: {
      control: "select",
      options: ["default", "filled", "left", "right", "justified"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  }
};

const Template = (args) => <EmTabs {...args} />;

export const Tabs = Template.bind({});
Tabs.args = {
  tabLists: [
    {
      title: "Active",
      content: "Item One - Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown",
      value: "1"
    },
    {
      title: "Inactive",
      content: "Item Two - Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown",
      value: "2"
    },
    {
      title: "raphic or web designs.",
      content: "Item Three - Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown",
      value: "3"
    },
  ]
};
