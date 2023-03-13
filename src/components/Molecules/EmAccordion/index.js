import React from 'react';
import PropTypes from "prop-types";
import { Accordion } from '@material-ui/core';
import EmAccordionTitle from './EmAccordionTitle';
import EmAccordionDetail from './EmAccordionDetail';
import "./index.scss";

const EmAccordion = ({
  accordionTitleClass,
  accordionData,
  accordionDetailClass
}) => {
  return (
    <>
      {accordionData.map((item) => {
        return (
          <Accordion>
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
    </>
  );
};

EmAccordion.propTypes = {
  accordionTitleClass: PropTypes.string,
  accordionData: PropTypes.array,
  accordionDetailClass: PropTypes.string,
};

export default EmAccordion;