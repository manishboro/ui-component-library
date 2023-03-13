import React from 'react';
import PropTypes from "prop-types";
import { Box } from '@material-ui/core';
import EmTypography from 'components/Atoms/EmTypography';
import EmDropDown from 'components/Molecules/EmDropDown';

const ReviewFilterBar = ({
  locationOptionList,
  platformOptionList,
  sortByOptionList
}) => {

  return (
    <Box display="flex" alignItems="center" >
      <Box mr={1} fontWeight={500} display={{ xs: 'none', md: 'block' }}>
        <EmTypography
          variant='body2'
          children="Filter by"
        />
      </Box>
      <Box mr={1}>
        <EmDropDown
          variant="outlined"
          size="small"
          label="Location"
          id="location"
          labelId="location"
          handleChange={() => { }}
          optionList={locationOptionList}
        />
      </Box>
      <Box mr={1}>
        <EmDropDown
          variant="outlined"
          size="small"
          label="Platform"
          id="platform"
          labelId="platform"
          handleChange={() => { }}
          optionList={platformOptionList}
        />
      </Box>
      <Box ml={{ xs: 'auto', md: 2 }}>
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
    </Box>
  );
};

ReviewFilterBar.propTypes = {
  locationOptionList: PropTypes.array,
  platformOptionList: PropTypes.array,
  sortByOptionList: PropTypes.array,
};

export default ReviewFilterBar;