
import React from 'react';
import EmBreadcrumb from '.';

export default {
  title: 'Atoms/Breadcrumbs',
  component: EmBreadcrumb,
};

const Template = (args) => <EmBreadcrumb {...args} />;

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
  breadcrumbData: [
    { name: "Application", path: "/Application" },
    { name: "Reviews" },
  ],
};
