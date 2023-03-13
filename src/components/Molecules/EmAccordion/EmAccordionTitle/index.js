import React from 'react';
import PropTypes from "prop-types";
import "./index.scss";
import { AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmTypography from 'components/Atoms/EmTypography';

const EmAccordionTitle = ({
  accordionTitleId,
  accordionTitleClass,
  accordionTitle
}) => {
  return (
    <AccordionSummary
      id={accordionTitleId}
      expandIcon={<ExpandMoreIcon />}
    >
      <EmTypography
        className={accordionTitleClass}
        children={accordionTitle} />
    </AccordionSummary>
  );
};

EmAccordionTitle.propTypes = {
  accordionTitleId: PropTypes.string,
  accordionTitleClass: PropTypes.string,
  accordionTitle: PropTypes.string,
};

export default EmAccordionTitle;