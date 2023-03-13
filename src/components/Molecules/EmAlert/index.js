import React from 'react';
import { Alert } from '@material-ui/lab';
import PropTypes from "prop-types";
import "./index.scss";

const EmAlert = ({
  variant,
  severity,
  icon,
  iconMapping,
  color,
  children
}) => {
  return (
    <Alert
      icon={icon}
      variant={variant}
      severity={severity}
      color={color}
      children={children}>
    </Alert>
  );
};

EmAlert.propTypes = {
  variant: PropTypes.string,
  severity: PropTypes.string,
  icon: PropTypes.object,
  iconMapping: PropTypes.object,
  color: PropTypes.string,
  children: PropTypes.node,
};

export default EmAlert;