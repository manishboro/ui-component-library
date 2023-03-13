
import React from 'react';
import EmAccordionTitle from '.';
export default {
  title: 'Molecules/Accordion/AccordionTitle',
  component: EmAccordionTitle,
};

const Template = (args) => <EmAccordionTitle {...args} />;

export const AccordionTitle = Template.bind({});
AccordionTitle.args = {
  accordionTitleId: "title1",
  accordionTitleClass: "",
  accordionTitle: "I noticed some erratic behavior from my screen",
};
