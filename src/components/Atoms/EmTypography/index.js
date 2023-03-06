import React from 'react';
import PropTypes from "prop-types";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const EmTypography = ({
  variant = "body1",
  align = "left",
  children,
  color = "textPrimary",
  display = "block",
  noWrap = false,
}) => {
  const useStyles = makeStyles({
    root: {

      '&.MuiTypography-body1': {
        fontSize: '1rem',
        lineHeight: '1.5rem'
      },
      '&.MuiTypography-body2': {
        fontSize: '0.875rem',
        lineHeight: '1.25rem'
      },
      '&.MuiTypography-caption	': {
        fontSize: '0.75rem',
        lineHeight: '1rem'
      },
      '&.MuiTypography-h1': {
        fontSize: '3rem',
      },
      '&.MuiTypography-h2': {
        fontSize: '2.25rem',
        lineHeight: '2.5rem'
      },
      '&.MuiTypography-h3': {
        fontSize: '1.875rem',
        lineHeight: '2.25rem'
      },
      '&.MuiTypography-h4': {
        fontSize: '1.5rem',
        lineHeight: '2rem'
      },
      '&.MuiTypography-h5': {
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
      },
      '&.MuiTypography-h6': {
        fontSize: '1.125rem',
        lineHeight: '1.5rem',
      },
      '&.MuiTypography-subtitle1': {
        fontSize: '1rem',
        lineHeight: '1.5rem'
      },
      '&.MuiTypography-subtitle2': {
        fontSize: '0.875rem',
        lineHeight: '1.25rem'
      },
      '&.MuiTypography-colorPrimary': {
        color: "#FFC107"
      },
      '&.MuiTypography-colorError	': {
        color: "#f44336"
      },
      '&.MuiTypography-colorTextPrimary': {
        color: "#14142B"
      },
      '&.MuiTypography-colorTextSecondary': {
        color: "#9C9CAF"
      },
    },
  })
  const classes = useStyles();
  return (
    <Typography
      variant={variant}
      align={align}
      children={children}
      classes={classes}
      color={color}
      display={display}
      noWrap={noWrap}
    />
  );
};

EmTypography.propTypes = {
  variant: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.object,
  color: PropTypes.string,
  display: PropTypes.string,
  noWrap: PropTypes.bool,
};

export default EmTypography;