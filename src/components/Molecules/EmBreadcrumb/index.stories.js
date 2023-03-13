
import React from 'react';
import EmBreadcrumb from '.';

export default {
  title: 'Molecules/Breadcrumb',
  component: EmBreadcrumb,
};

const Template = (args) => <EmBreadcrumb {...args} />;

export const Breadcrumb = Template.bind({});
Breadcrumb.args = {
  breadcrumbData: [
    { name: "Application", path: "/Application" },
    { name: "Reviews" },
  ],
};
