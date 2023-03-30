import React, { useState } from "react";
import PropTypes from "prop-types";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { FormHelperText } from "@material-ui/core";
import EmCheckbox from "components/Atoms/EmCheckbox";

import "./index.scss"
const useStyles = makeStyles(() => ({
  paper: {
    border: "1px solid #e5e5eb",
    borderRadius: 4,
    marginTop: 4,
    boxShadow: 'none',
  },

  list: {
    paddingTop: 0,
    paddingBottom: 0,

    "& li": {
      paddingTop: 6,
      paddingBottom: 6,
      fontSize: "14px",
      minHeight: "auto",
    },

    "& li .MuiListItemIcon-root": {
      minWidth: "auto"
    },

    "& li .MuiFormControlLabel-root": {
      marginRight: 0,
    },
    "& li .MuiTypography-body1": {
      fontSize: 14,
      color: ' #1F1F37'
    },

    "& li.Mui-selected": {
      background: "#F3F3F6"
    },

    "& li.Mui-selected:hover": {
      background: "#F3F3F6"
    }
  }

}));

const EmMultiSelect = ({
  variant = "outlined",
  id,
  label,
  labelId,
  size,
  options,
  disabled = false,
  error = false,
  errorText,

}) => {
  const classes = useStyles();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    classes: {
      list: classes.list,
      paper: classes.paper
    },
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        minWidth: 165
      }
    },
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    variant: "menu"
  };

  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    setSelected(value);
  };

  return (
    <FormControl variant={variant} className={`em-multiSelect em-m ${size}`} error={error}>
      <InputLabel id={labelId} >{label}</InputLabel>
      <Select
        id={id}
        multiple
        value={selected}
        IconComponent={ExpandMoreRoundedIcon}
        onChange={handleChange}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        classes={{
          select: "em-select",
          icon: "em-dropdown-icon",
        }}
        disabled={disabled}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <ListItemIcon>
              <EmCheckbox checked={selected.indexOf(option) > -1} />
            </ListItemIcon>
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText className='error'>{errorText}</FormHelperText>}
    </FormControl>
  );
};

EmMultiSelect.propTypes = {
  variant: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  labelId: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  optionList: PropTypes.array,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
};
export default EmMultiSelect;
