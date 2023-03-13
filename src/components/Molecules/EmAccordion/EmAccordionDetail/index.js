import React from 'react';
import PropTypes from "prop-types";
import { AccordionSummary } from '@material-ui/core';
import "./index.scss";

const EmAccordionDetail = ({
  accordionDetailClass,
  accordionDetail
}) => {
  return (
    <AccordionSummary
      className={accordionDetailClass}
      children={accordionDetail} />
  );
};

EmAccordionDetail.propTypes = {
  accordionDetailClass: PropTypes.string,
  accordionDetail: PropTypes.node,
};

export default EmAccordionDetail;