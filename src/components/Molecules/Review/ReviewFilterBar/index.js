import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import EmTypography from '../../../Atoms/EmTypography';
import EmDropDown from '../../../Molecules/EmDropDown';
import EmMultiSelect from 'components/Molecules/EmMultiSelect';

const ReviewFilterBar = ({ ratingOptions, platformOptions, sortByOptions, ratingHandleChange, platformHandleChange, sortByHandleChange }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box mr={1} fontWeight={500} display={{ xs: 'none', md: 'block' }}>
        <EmTypography variant="body2" children="Filter by" />
      </Box>
      <Box mr={1}>
        <EmDropDown
          variant="outlined"
          size="small"
          placeholder="Rating"
          id="rating"
          labelId="rating"
          handleChange={ratingHandleChange}
          options={ratingOptions}
        />
      </Box>
      <Box mr={1} maxWidth="100px">
        <EmMultiSelect
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
        <EmDropDown variant="outlined" size="small" placeholder="Sort by" id="sortBy" labelId="sortBy" handleChange={sortByHandleChange} options={sortByOptions} />
      </Box>
    </Box>
  );
};

ReviewFilterBar.propTypes = {
  ratingOptions: PropTypes.array,
  platformOptions: PropTypes.array,
  sortByOptions: PropTypes.array,
};

export default ReviewFilterBar;
