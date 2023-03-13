import React from 'react';
import PropTypes from "prop-types";
import Tooltip from '@material-ui/core/Tooltip';
import { Box } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import "./index.scss";

const EmTooltip = ({
  tooltipContent,
  tooltipPosition,
  tooltipTitle,
  tooltipClasses,
  titleClassName,
  arrow
}) => {
  return (
    <>
      <Tooltip
        title={tooltipContent}
        placement={tooltipPosition}
        classes={tooltipClasses}
        arrow
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}>
        <Box
          component="div"
          display="inline-block"
          className={titleClassName}>
          {tooltipTitle}
        </Box>
      </Tooltip>
    </>
  );
};

EmTooltip.propTypes = {
  tooltipContent: PropTypes.string,
  tooltipPosition: PropTypes.string,
  tooltipTitle: PropTypes.string,
};

export default EmTooltip;