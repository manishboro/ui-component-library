import React from 'react';
import PropTypes from "prop-types";
import { Pagination } from '@material-ui/lab';
import "./index.scss"

const EmPagination = ({
  className,
  count
}) => {

  return (
    <Pagination className={`em-pagination ${className}`} count={count} variant="outlined" shape="rounded" />
  );
};

EmPagination.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
};

export default EmPagination;