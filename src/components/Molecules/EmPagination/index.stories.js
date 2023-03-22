
import React from 'react';
import EmPagination from '.';

export default {
  title: 'Molecules/Pagination',
  component: EmPagination,
};

const Template = (args) => <EmPagination {...args} />;

export const Pagination = Template.bind({});
Pagination.args = {
  count: 10,
  paginationHeading: "1 to 4 of 65 records"
};
