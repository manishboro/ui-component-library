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
    <Box display="flex" alignItems="center" flexWrap="wrap">
      <Box mr={1} fontWeight={500} width={{ xs: '100%', sm: 'auto' }} order={{ xs: 2, md: 1 }} m={{ xs: "15px 0 8px", sm: "0 8px 0 0" }}>
        <EmTypography variant="body2" children="Filter by" />
      </Box>

      <Box mr={1} maxWidth={{ xs: "90px", sm: "100px" }} order={{ xs: 3, sm: 2 }}>
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

      <Box mr={1} maxWidth={{ xs: "90px", sm: "100px" }} order={{ xs: 4, sm: 3 }}>
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

      <Box className='search-box' position="relative" mr={{ xs: 0, sm: 1 }} maxWidth={{ xs: "100%", sm: "190px" }} width="100%" display="flex" order={{ xs: 1, sm: 4 }}>
        <Box position="absolute" top={{ xs: "12px", sm: "5px" }} left="10px">
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

      <Box order={5} ml={{ xs: "auto", md: 0 }}>
        <EmTags
          variant="soft"
          size="medium"
          label='Clear all'
          isDeleteIcon={false}
          bgColor="#FFF"
          textColor='#373751'
          iconColor="#0C0C1E"
          iconPosition='left'
        />

      </Box>

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
