

import React from 'react';
import EmPopover from '.';
import EmTypography from 'components/Atoms/EmTypography';
import { Box } from '@material-ui/core';

export default {
  title: 'Molecules/Popover',
  component: EmPopover,
  argTypes: {
    placement: {
      control: "select",
      options: ['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']
    },
  }
};

const Template = (args) => <EmPopover {...args} />;

export const Popover = Template.bind({});
Popover.args = {
  open: true,
  id: "test",
  popoverText: <EmTypography children="Card Title"></EmTypography>,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },

  popoverContent:
    <Box width='236px'>
      <Box padding="5px 16px" borderBottom="1px solid #F0F0F0">
        <EmTypography variant='body2' children="Card Title" fontWeight='500'></EmTypography>
      </Box>
      <Box padding="12px 16px">
        <EmTypography variant='body2' children="content"></EmTypography>
        <EmTypography variant='body2' children="content"></EmTypography>
      </Box>
    </Box>
};
