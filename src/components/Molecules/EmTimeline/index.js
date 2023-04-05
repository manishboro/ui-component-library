import React from 'react';
import PropTypes from "prop-types";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CheckIcon from '@material-ui/icons/Check';
import { Box } from '@material-ui/core';
import EmTypography from '../../Atoms/EmTypography';
import "./index.scss"

const EmSteppers = ({
  isIcon,
  timeLineLists,
  align = 'left'
}) => {
  return (
    <Timeline className='em-timeline' align={align}>
      {timeLineLists.map((list, index) => {
        return (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color='primary'>
                {isIcon && <CheckIcon />}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box display='grid' flexDirection='column' gridGap="5px" mb='30px'>
                <EmTypography variant='body2' color='textSecondary'>{list.date}</EmTypography>
                <EmTypography variant='body2' color='textPrimary' fontWeight='500'>{list.title}</EmTypography>
                <EmTypography variant='body2' color='textSecondary'>{list.desc}</EmTypography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  );
}

EmSteppers.propTypes = {
  align: PropTypes.string,
  isIcon: PropTypes.bool,
  timeLineLists: PropTypes.array,
};
export default EmSteppers;
