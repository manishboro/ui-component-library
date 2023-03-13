
import React from 'react';
import EmTabPanel from '.';
export default {
  title: 'Molecules/Tabs/TabPanel',
  component: EmTabPanel,
};

const Template = (args) => <EmTabPanel {...args} />;

export const TabPanel = Template.bind({});
TabPanel.args = {
  tabPanelValue: "1",
  tabPanelContent: "Item One - Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown",
};
