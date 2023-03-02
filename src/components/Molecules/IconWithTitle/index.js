import React from 'react';
import PropTypes from "prop-types";
import "./index.scss"
import { Typography } from '@material-ui/core';


const IconWithTitle = ({
  iconSrc,
  iconAlt,
  iconWidth = 20,
  iconHeight = 20,
  iconClass = "",
  title,
  titleClass = "ml-2",
  titleSize = "text-sm",
  titleColor = ""
}) => {
  return (
    <div>
      <div className='d-flex align-items-center'>
        <img className={iconClass} src={iconSrc} width={iconWidth} height={iconHeight} alt={iconAlt} />
        <Typography className={`${titleSize} ${titleColor} ${titleClass}`} children={title} />
      </div>
    </div>
  );
};

IconWithTitle.propTypes = {
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  iconClass: PropTypes.string,
  title: PropTypes.string,
  titleClass: PropTypes.string,
  titleSize: PropTypes.string,
  titleColor: PropTypes.string,
};

export default IconWithTitle;