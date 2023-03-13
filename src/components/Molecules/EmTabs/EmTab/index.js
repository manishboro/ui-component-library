import React from 'react';
import PropTypes from "prop-types";
import { Tab } from '@material-ui/core';
import "./index.scss";

const EmTab = ({
  tabTitle,
  tabValue,
  disabled = false
}) => {

  return (
    <>
      <Tab label={tabTitle} value={tabValue} disabled={disabled} />
    </>
  );
};

EmTab.propTypes = {
  tabTitle: PropTypes.string,
  tabValue: PropTypes.string,
  disabled: PropTypes.bool,
};

export default EmTab;