import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import EmTypography from '../../../Atoms/EmTypography';
import EmDropDown from '../../../Molecules/EmDropDown';
import EmMultiSelect from 'components/Molecules/EmMultiSelect';
import EmTags from 'components/Atoms/EmTags';
import EmInputField from 'components/Atoms/EmInputField';
import "./index.scss"

const ReviewFilterBar = ({
  ratingOptions,
  platformOptions,
  ratingHandleChange,
  platformHandleChange,
  searchOnChange
}) => {
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
      <Box className='search-box' position="relative" mr={1} maxWidth="320px" width="100%" display="flex">
        <Box position="absolute" top="5px" left="10px">
          <img src='/images/icons/search.svg' alt='search' />
        </Box>
        <EmInputField
          id="search-review"
          placeholder="Search..."
          size="medium"
          fullWidth={true}
          onChange={searchOnChange}
        />
      </Box>

      <EmTags
        variant="soft"
        size="medium"
        label='Clear all'
        isDeleteIcon={false}
        bgColor="#F3F3F6"
        textColor='#373751'
        iconColor="#0C0C1E"
        iconPosition='left'
      />


      {/* <Box ml={{ xs: 'auto', md: 2 }}>
        <EmDropDown variant="outlined" size="small" placeholder="Sort by" id="sortBy" labelId="sortBy" handleChange={sortByHandleChange} options={sortByOptions} />
      </Box> */}
    </Box>
  );
};

ReviewFilterBar.propTypes = {
  ratingOptions: PropTypes.array,
  platformOptions: PropTypes.array,
  sortByOptions: PropTypes.array,
};

export default ReviewFilterBar;
