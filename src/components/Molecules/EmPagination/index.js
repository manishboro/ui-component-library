import React from 'react';
import PropTypes from "prop-types";
import { Pagination } from '@material-ui/lab';
import "./index.scss"

const EmPagination = ({
  className,
  count,
  page,
  onChange
}) => {

  return (
    <Pagination page={page} className={`em-pagination ${className}`} count={count} onChange={onChange} variant="outlined" shape="rounded" />
  );
};

EmPagination.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
};

export default EmPagination;