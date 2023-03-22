import React from 'react';
import PropTypes from "prop-types";
import "./index.scss"
import { Box, Modal } from '@material-ui/core';

const EmModal = ({
  open = false,
  modalClose = () => { },
  body
}) => {

  return (
    <Modal
      className='em-modal'
      open={open}
      onClose={modalClose}>
      <Box
        className='em-modal-content'
        borderRadius='2px'
        boxShadow='0px 9px 18px rgba(0, 0, 0, 0.15);'
        bgcolor='#FCFCFC'
        margin='auto'
      >
        {body}
      </Box>

    </Modal>
  );
}

EmModal.propTypes = {
  open: PropTypes.bool,
  modalClose: PropTypes.func,
  body: PropTypes.node,
};
export default EmModal;
