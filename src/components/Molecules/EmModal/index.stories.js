
import React from 'react';
import EmModal from '.';
import EmTypography from 'components/Atoms/EmTypography';
import { Box } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default {
  title: 'Molecules/Modal',
  component: EmModal,
};

const Template = (args) => <EmModal {...args} />;

export const Modal = Template.bind({});
Modal.args = {
  open: true,
  body:
    <Box width='572px'>
      <Box display='flex' justifyContent='space-between' padding='16px 24px' boxShadow='inset 0px -1px 0px #F0F0F0' >
        <EmTypography variant='body2' children="Basic Modal" fontWeight='500'></EmTypography>
        <CloseIcon style={{ 'cursor': 'pointer' }} />
      </Box>
      <Box padding="24px" textAlign='center'>
        <EmTypography variant='body2' children="Swap" color='initial' textColor="#FFC107" align='center'></EmTypography>
      </Box>
    </Box>,
  modalClose: () => { }
};
