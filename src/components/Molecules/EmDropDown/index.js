import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { FormHelperText, InputLabel } from "@material-ui/core";
import "./index.scss"

const useStyles = makeStyles(() => ({
  paper: {
    border: "1px solid #e5e5eb",
    borderRadius: 4,
    marginTop: 4,
    boxShadow: 'none'
  },

  list: {
    paddingTop: 0,
    paddingBottom: 0,

    "& li": {
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: "14px",
      minHeight: "auto"
    },

    "& li.Mui-selected": {
      background: "#F3F3F6"
    },

    "& li.Mui-selected:hover": {
      background: "#F3F3F6"
    }
  }

}));

const EmDropDown = ({
  id,
  value,
  label,
  placeholder,
  handleChange,
  labelId,
  options,
  errorText,
  variant = "outlined",
  size = "small",
  isLabel = false,
  disabled = false,
  error = false,
}) => {
  const classes = useStyles();
  const menuProps = {
    classes: {
      list: classes.list,
      paper: classes.paper
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    getContentAnchorEl: null
  };
  return (
    <FormControl variant={variant} className={`em-dropdown ${size}`} error={error}>
      {isLabel && <InputLabel id={labelId} >{label}</InputLabel>}
      <Select
        id={id}
        value={value}
        onChange={handleChange}
        IconComponent={ExpandMoreRoundedIcon}
        label={label}
        MenuProps={menuProps}
        displayEmpty={true}
        renderValue={value => value?.length ? Array.isArray(value) ? value.join(', ') : value : placeholder}
        classes={{
          select: "em-select",
          icon: "em-dropdown-icon"
        }}
        disabled={disabled}
      >
        {options.map((option, index) => (
          <MenuItem value={option} key={index}>
            {option}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText className='error'>{errorText}</FormHelperText>}
    </FormControl>
  );
};

EmDropDown.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
  handleChange: PropTypes.func,
  labelId: PropTypes.string,
  isLabel: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
};

export default EmDropDown;
