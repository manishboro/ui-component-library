import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Box, Tab, Tabs, } from '@material-ui/core';
import { TabContext } from '@material-ui/lab';
import "./index.scss";
import EmTab from './EmTab';
import EmTabPanel from './EmTabPanel';

const EmSwitch = ({
  orientation,
  tabListData
}) => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <Box display="flex" flexDirection={orientation}>
          <Box>
            <Tabs
              onChange={handleChange}
              value={value}
              indicatorColor="primary"
              textColor="primary"
              centered={false}
              orientation={orientation} >
              {tabListData.map((item) => {
                return (
                  <EmTab tabTitle={item.title} tabValue={item.value} />
                )
              })}
            </Tabs>
          </Box>
          <Box>
            {tabListData.map((item) => {
              return (
                <EmTabPanel tabPanelValue={item.value} tabPanelContent={item.content} />
              )
            })}
          </Box>
        </Box>
      </TabContext>
    </>
  );
};

EmSwitch.propTypes = {
  EmSwitch: PropTypes.string,
  centered: PropTypes.bool,
};

export default EmSwitch;