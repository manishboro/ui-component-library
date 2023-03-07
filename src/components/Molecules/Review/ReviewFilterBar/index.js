import React from 'react';
import PropTypes from "prop-types";
import { Box, Grid, makeStyles } from '@material-ui/core';
import EmTypography from 'components/Atoms/EmTypography';
import EmDropDown from 'components/Atoms/EmDropDown';
const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

const ReviewFilterBar = ({
  locationOptionList,
  platformOptionList,
  sortByOptionList
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={1} alignItems="center">
      <Grid item>
        <Box fontWeight={500}>
          <EmTypography
            variant='subtitle2'
            children="Filter by"
          />
        </Box>
      </Grid>
      <Grid item>
        <EmDropDown
          variant="outlined"
          size="small"
          label="Location"
          id="location"
          labelId="location"
          handleChange={() => { }}
          optionList={locationOptionList}
        />
      </Grid>
      <Grid item>
        <EmDropDown
          variant="outlined"
          size="small"
          label="Platform"
          id="platform"
          labelId="platform"
          handleChange={() => { }}
          optionList={platformOptionList}
        />
      </Grid>
      <Grid item>
        <Box ml={2}>
          <EmDropDown
            variant="outlined"
            size="small"
            label="Sort by"
            id="sortBy"
            labelId="sortBy"
            handleChange={() => { }}
            optionList={sortByOptionList}
          />
        </Box>

      </Grid>
    </Grid>
  );
};

ReviewFilterBar.propTypes = {
  variant: PropTypes.string,
  reviewerImg: PropTypes.string,
  children: PropTypes.string,
  reviewerName: PropTypes.string,
  avatarSize: PropTypes.string,
  time: PropTypes.string,
};

export default ReviewFilterBar;