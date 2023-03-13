
import React from 'react';
import EmAccordionDetail from '.';
export default {
  title: 'Molecules/Accordion/AccordionDetails',
  component: EmAccordionDetail,
};

const Template = (args) => <EmAccordionDetail {...args} />;

export const AccordionDetails = Template.bind({});
AccordionDetails.args = {
  accordionDetail: "After a while, it’s common for keyboards to start malfunctioning. We have the habit of pressing the same keys which causes stress on their mechanics leading to problems."
};
