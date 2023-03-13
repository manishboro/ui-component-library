
import React from 'react';
import EmTooltip from '.';
export default {
  title: 'Molecules/Tooltip',
  component: EmTooltip,
  argTypes: {
    tooltipPosition: {
      control: "select",
      options: ["top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-start", "bottom", "bottom-end", "left-start", "left", "left-end"],
    },
  }
};

const Template = (args) => <EmTooltip {...args} />;

export const Tooltip = Template.bind({});
Tooltip.args = {
  tooltipContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  tooltipPosition: "top-end",
  tooltipTitle: "Text",
};
