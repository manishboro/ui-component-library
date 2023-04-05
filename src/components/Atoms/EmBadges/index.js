import React from 'react';
import PropTypes from "prop-types";
import { Badge } from '@material-ui/core';
import "./index.scss";

const EmBadges = ({
  badgeStyle,
  badgeContent,
  color
}) => {

  return (
    <Badge
      className={`em-badges ${badgeStyle}`}
      badgeContent={badgeContent}
      color={color}
      overlap="rectangular">
      <img src='/images/icons/notification.svg' width={24} height={24} alt="badge" />
    </Badge>
  );
};

EmBadges.propTypes = {
  badgeContent: PropTypes.number,
  color: PropTypes.string,
};

export default EmBadges;