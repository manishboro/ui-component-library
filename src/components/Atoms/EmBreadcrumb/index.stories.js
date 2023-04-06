
import React from 'react';
import EmBreadcrumb from '.';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default {
  title: 'Atoms/Breadcrumb',
  component: EmBreadcrumb,
  argTypes: {
    separator: {
      control: "select",
      options: ["/"],
    },
  }
};

const Template = (args) => <EmBreadcrumb {...args} />;

export const Breadcrumb = Template.bind({});
Breadcrumb.args = {
  breadcrumbs: [
    { name: "Application", path: "/Application" },
    { name: "Application", path: "/Application" },
    { name: "Application", path: "/Application" },
    { name: "Application", path: "/Application" },
    { name: "Application", path: "/Application" },
    { name: "Application", path: "/Application" },
    { name: "Application", path: "/Application" },
    { name: "Application", path: "/Application" },
    { name: "Reviews" },
  ],
  maxItems: 2,
  separator: <NavigateNextIcon fontSize="small" />
};
