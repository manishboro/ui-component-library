
import React from 'react';
import EmAccordion from '.';
export default {
  title: 'Molecules/Accordion',
  component: EmAccordion,
  argTypes: {
    variant: {
      control: "select",
      options: ["normal", "outline"],

    },
  }
};

const Template = (args) => <EmAccordion {...args} />;

export const Accordion = Template.bind({});
Accordion.args = {
  accordionData: [
    { id: "data1", title: "Accordion 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
    { id: "data2", title: "Accordion 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
    { id: "data3", title: "Accordion 3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
  ]
};
