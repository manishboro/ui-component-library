import React from 'react';
import { Alert } from '@material-ui/lab';
import PropTypes from "prop-types";
import InfoIcon from '@material-ui/icons/Info';
import BlockIcon from '@material-ui/icons/Block';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import "./index.scss";

const EmAlert = ({
  variant = "filled",
  severity = "error",
  icon,
  color,
  children
}) => {
  return (
    <Alert className='em-alert' icon={icon}
      iconMapping={{
        error: <BlockIcon fontSize="inherit" />,
        warning: <ErrorIcon fontSize="inherit" />,
        info: <InfoIcon fontSize="inherit" />,
        success: <CheckCircleIcon fontSize="inherit" />,
      }}
      color={color} variant={variant} severity={severity}>
      {children}
    </Alert>
  );
};

EmAlert.propTypes = {
  variant: PropTypes.string,
  severity: PropTypes.string,
  icon: PropTypes.object,
  color: PropTypes.string,
  children: PropTypes.node,
};

export default EmAlert;