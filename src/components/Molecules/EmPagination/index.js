import React from 'react';
import PropTypes from "prop-types";
import { Pagination } from '@material-ui/lab';
import "./index.scss"
import { Box } from '@material-ui/core';
import EmTypography from 'components/Atoms/EmTypography';

const EmPagination = ({
  className,
  count,
  page,
  onChange,
  paginationHeading
}) => {

  return (
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center">
      {paginationHeading && <Box marginBottom={{ xs: 2, md: 0 }} ><EmTypography variant='body2' color='textSecondary' >{paginationHeading}</EmTypography></Box>}

      <Pagination page={page} className={`em-pagination ${className}`} count={count} onChange={onChange} variant="outlined" shape="rounded" />
    </Box>
  );
};

EmPagination.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
  paginationHeading: PropTypes.bool
};

export default EmPagination;