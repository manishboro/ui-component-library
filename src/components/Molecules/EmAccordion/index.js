import React from 'react';
import PropTypes from "prop-types";
import { Accordion, Box } from '@material-ui/core';
import EmAccordionTitle from './EmAccordionTitle';
import EmAccordionDetail from './EmAccordionDetail';
import "./index.scss";

const EmAccordion = ({
  accordionTitleClass,
  accordionData,
  accordionDetailClass,
  variant = "outline",
  defaultExpanded = false,
}) => {
  return (
    <Box className={`em-accordion ${variant}`}>
      {accordionData.map((item, index) => {
        return (
          <Accordion
            defaultExpanded={defaultExpanded} key={index}>
            <EmAccordionTitle
              accordionTitleId={item.id}
              accordionTitleClass={accordionTitleClass}
              accordionTitle={item.title} />
            <EmAccordionDetail
              accordionDetailClass={accordionDetailClass}
              accordionDetail={item.content} />
          </Accordion>
        )
      })}
    </Box>
  );
};

EmAccordion.propTypes = {
  variant: PropTypes.string,
  accordionTitleClass: PropTypes.string,
  accordionData: PropTypes.array,
  accordionDetailClass: PropTypes.string,
  square: PropTypes.bool,
  defaultExpanded: PropTypes.bool
};

export default EmAccordion;