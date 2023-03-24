import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmTypography from '../../../Atoms/EmTypography';

const EmAccordionTitle = ({ accordionTitleId, accordionTitleClass = '', accordionTitle, variant = 'body1', color = 'textPrimary' }) => {
  return (
    <AccordionSummary id={accordionTitleId} className="accordionTitle" expandIcon={<ExpandMoreIcon />}>
      <EmTypography variant={variant} color={color} className={accordionTitleClass} children={accordionTitle} />
    </AccordionSummary>
  );
};

EmAccordionTitle.propTypes = {
  accordionTitleId: PropTypes.string,
  accordionTitleClass: PropTypes.string,
  accordionTitle: PropTypes.string,
};

export default EmAccordionTitle;
