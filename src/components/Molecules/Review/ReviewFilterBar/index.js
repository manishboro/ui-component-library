import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import EmTypography from '../../../Atoms/EmTypography';
import EmDropDown from '../../../Molecules/EmDropDown';

const ReviewFilterBar = ({ locationOptions, platformOptions, sortByOptions, locationHandleChange, platformHandleChange, sortByHandleChange }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box mr={1} fontWeight={500} display={{ xs: 'none', md: 'block' }}>
        <EmTypography variant="body2" children="Filter by" />
      </Box>
      <Box mr={1}>
        <EmDropDown
          variant="outlined"
          size="small"
          label="Location"
          id="location"
          labelId="location"
          handleChange={locationHandleChange}
          options={locationOptions}
        />
      </Box>
      <Box mr={1}>
        <EmDropDown
          variant="outlined"
          size="small"
          label="Platform"
          id="platform"
          labelId="platform"
          handleChange={platformHandleChange}
          options={platformOptions}
        />
      </Box>
      <Box ml={{ xs: 'auto', md: 2 }}>
        <EmDropDown variant="outlined" size="small" label="Sort by" id="sortBy" labelId="sortBy" handleChange={sortByHandleChange} options={sortByOptions} />
      </Box>
    </Box>
  );
};

ReviewFilterBar.propTypes = {
  locationOptions: PropTypes.array,
  platformOptions: PropTypes.array,
  sortByOptions: PropTypes.array,
};

export default ReviewFilterBar;
