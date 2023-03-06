import React from 'react';
import PropTypes from "prop-types";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const EmButton = ({
  children,
  variant = "contained",
  size = "small",
  color = "primary",
  href,
  component,
  disabled = false,
  startIcon,
  endIcon,
  fullWidth = false,

}) => {

  const useStyles = makeStyles({
    root: {
      '&.MuiButton-root': {
        textTransform: "capitalize",
        fontWeight: 500,
      },
      '&.MuiButton-text': {
        padding: 0
      },
      '&.MuiButton-textPrimary': {
        color: "#FFC107"
      },

      '&.MuiButton-textSecondary': {
        color: "#14142B"
      },
      '&.MuiButton-outlined': {
        border: "1px solid #D1D1DB",
        borderRadius: "0.25rem"

      },
      '&.MuiButton-outlinedPrimary': {
        color: "#FFC107",
        border: "1px solid #FFC107",

      },
      '&.MuiButton-outlinedSecondary': {
        color: "#14142B"
      },
      '&.MuiButton-contained': {
        fontWeight: 500,
        textTransform: "capitalize",
        borderRadius: 50,
        backgroundColor: "#FFC107"

      },
      '&.MuiButton-containedPrimary': {
        color: "#FFF"
      },
      '&.MuiButton-containedSecondary': {
        color: "#14142B"
      },
      '&.MuiButton-textSizeSmall': {
        fontSize: "0.75rem",
        lineHeight: "1rem",
      },
      '&.MuiButton-textSizeLarge': {
        fontSize: "1rem",
        lineHeight: "1.25rem",
      },
      '&.MuiButton-sizeSmall': {
        padding: "0.5rem 1rem",
      },
      '&.MuiButton-sizeLarge': {
        padding: "0.85rem 1.5rem",
      },
      '&.Mui-disabled': {
        opacity: 0.65
      }
    },
  })

  const classes = useStyles();

  return (
    <Button
      variant={variant}
      children={children}
      classes={classes}
      color={color}
      component={component}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      href={href}
      size={size}
    />
  );
};

EmButton.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.object,
  color: PropTypes.string,
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.string,
};

export default EmButton;