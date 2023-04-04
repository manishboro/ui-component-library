import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import EmTypography from '../../Atoms/EmTypography';

const IconWithTitle = ({
  iconSrc,
  iconAlt,
  title,
  titleColor,
  iconWidth = 20,
  iconHeight = 20,
  iconClass = '',
  titleVariant = 'body1',
  titleColorType = 'textPrimary',
  spaceBetween = 1,
  bottomSpace = "",
  fontWeight = "400"
}) => {
  return (
    <Box display="flex" alignItems="center">
      <Box flexShrink={0} mr={spaceBetween} mb={bottomSpace} display="flex" alignItems="center">
        <img className={iconClass} src={iconSrc} width={iconWidth} height={iconHeight} alt={iconAlt} />
      </Box>
      <EmTypography fontWeight={fontWeight} variant={titleVariant} color={titleColorType} textColor={titleColor} children={title} />
    </Box>
  );
};

IconWithTitle.propTypes = {
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  iconClass: PropTypes.string,
  title: PropTypes.string,
  titleVariant: PropTypes.string,
  titleColorType: PropTypes.string,
  titleColor: PropTypes.string,
  spaceBetween: PropTypes.string,
};

export default IconWithTitle;
