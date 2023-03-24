import PropTypes from "prop-types";
import React, { useState } from "react";
import { Box, TextField } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./index.scss";

const EMInputNumber = ({
  id,
  className,
  label,
  type,
  variant = "outlined",
  size = "medium",
  placeholder,
  defaultValue,
  disabled = false,
  fullWidth = true,
  min = 1,
  increment = 1,
  decrement = 1,
  onCountChange,
  valueAsNumber
}) => {
  const [count, setCount] = useState(min)
  const handleClickAdd = () => {
    setCount(count + increment)
    onCountChange(count + increment)
  }

  const handleClickSubtract = () => {
    if (count > min) {
      setCount(count - decrement)
      onCountChange(count - decrement)
    }
  }

  const handleClick = () => {
    setCount(valueAsNumber)
    onCountChange(valueAsNumber)
  }

  return (
    <Box className={`em-input-number  ${size}`} position='relative'>
      <TextField
        id={id}
        className={className}
        label={label}
        type={type}
        variant={variant}
        placeholder={placeholder}
        fullWidth={fullWidth}
        defaultValue={defaultValue}
        disabled={disabled}
        value={count}
        onChange={handleClick}
        InputLabelProps={{ shrink: false }}
      />

      <Box className={`iconGroup ${disabled && 'disabled'}`} position='absolute' bottom='1px' right='1px' width='22px' borderLeft='1px solid #F3F3F6;'>
        <div className="expandLess" onClick={handleClickSubtract}>
          <ExpandLessIcon className="expandLessIcon" />
        </div>
        <div className="expandMore" onClick={handleClickAdd}>
          <ExpandMoreIcon className="expandMoreIcon" />
        </div>
      </Box>
    </Box>
  )
};

EMInputNumber.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  InputLabelProps: PropTypes.object,
  fullWidth: PropTypes.bool,
  min: PropTypes.number,
  increment: PropTypes.number,
  decrement: PropTypes.number,
  onCountChange: PropTypes.func,
};

export default EMInputNumber;