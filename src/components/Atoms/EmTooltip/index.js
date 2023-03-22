import React from 'react';
import PropTypes from "prop-types";
import Tooltip from '@material-ui/core/Tooltip';
import { Box } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import "./index.scss";

const EmTooltip = ({
  tooltipContent,
  tooltipPosition,
  titleClassName,
  arrow,
  children
}) => {
  return (
    <div className="em-tooltip">
      <Tooltip
        title={tooltipContent}
        placement={tooltipPosition}
        arrow
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        classes={{
          arrow: "tooltip-arrow",
          tooltip: "em-tooltip-content"
        }}
      >
        <Box
          component="div"
          display="inline-block"
          className={titleClassName}>
          {children}
        </Box>
      </Tooltip>
    </div>
  );
};

EmTooltip.propTypes = {
  tooltipContent: PropTypes.string,
  tooltipPosition: PropTypes.string,
  tooltipTitle: PropTypes.string,
};

export default EmTooltip;