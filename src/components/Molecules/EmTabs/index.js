import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Box, Tab, Tabs } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import "./index.scss";

const EmTabs = ({
  tabLists,
  tabVariant = "justified",
  orientation = "horizontal"
}) => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <Box className="em-tabs" display="flex" flexDirection={orientation === 'horizontal' && 'column'} >
          <Tabs
            className={tabVariant}
            onChange={handleChange}
            value={value}
            indicatorColor="primary"
            textColor="primary"
            orientation={orientation}>
            {tabLists.map((item) => {
              return (
                <Tab label={item.title} value={item.value} />
              )
            })}
          </Tabs>
          <Box>
            {tabLists.map((item, index) => {
              return (
                <TabPanel value={item.value} key={index}>{item.content}</TabPanel>
              )
            })}
          </Box>
        </Box>
      </TabContext>

    </>
  );
};

EmTabs.propTypes = {
  EmTabs: PropTypes.string,
  centered: PropTypes.bool,
};

export default EmTabs;