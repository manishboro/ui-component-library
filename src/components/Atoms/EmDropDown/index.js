import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { InputLabel } from "@material-ui/core";
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
  variant = "outlined",
  id,
  value,
  handleChange,
  labelId,
  label,
  labelWidth,
  multiple,
  displayEmpty = true,
  size = "small",
  optionList,
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
    <FormControl variant={variant} className={`em-dropdown ${size}`}>
      <InputLabel id={labelId} >{label}</InputLabel>
      <Select
        id={id}
        value={value}
        onChange={handleChange}
        disableUnderline
        IconComponent={ExpandMoreRoundedIcon}
        label={label}
        labelWidth={labelWidth}
        multiple={multiple}
        displayEmpty={displayEmpty}
        MenuProps={menuProps}
        classes={{
          select: "em-select",
          icon: "em-dropdown-icon"
        }}
      >
        {optionList.map((item, index) => (
          <MenuItem key={item.index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default EmDropDown;
