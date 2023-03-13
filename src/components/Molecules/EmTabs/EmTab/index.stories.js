
import React from 'react';
import EmTab from '.';
export default {
  title: 'Molecules/Tabs/Tab',
  component: EmTab,
};

const Template = (args) => <EmTab {...args} />;

export const Tab = Template.bind({});
Tab.args = {
  tabTitle: "Item One",
  tabValue: "1"
};
