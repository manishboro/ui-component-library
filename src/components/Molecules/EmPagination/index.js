import React from 'react';
import PropTypes from "prop-types";
import "./index.scss";
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
  count: PropTypes.number,
};

export default EmPagination;