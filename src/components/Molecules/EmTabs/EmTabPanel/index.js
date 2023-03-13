import React from 'react';
import { TabPanel } from '@material-ui/lab';
import PropTypes from "prop-types";
import "./index.scss";

const EmTabPanel = ({
  tabPanelValue,
  tabPanelContent
}) => {
  return (
    <>
      <TabPanel value={tabPanelValue} children={tabPanelContent} />
    </>

  );
};

EmTabPanel.propTypes = {
  tabPanelContent: PropTypes.string,
};

export default EmTabPanel;