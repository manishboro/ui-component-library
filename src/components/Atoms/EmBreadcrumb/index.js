import React from 'react';
import PropTypes from "prop-types";
import { Breadcrumbs, Link } from '@material-ui/core';
import "./index.scss";

const EmBreadcrumb = ({
  breadcrumbs,
  maxItems = 2,
  separator = "/"
}) => {
  return (
    <Breadcrumbs separator={separator} maxItems={maxItems} aria-label="breadcrumb" className="em-breadcrumb">
      {breadcrumbs.map(({ name, path }, key) =>
        key + 1 === breadcrumbs.length ? (
          <Link color="textPrimary" key={key}> {name} </Link>
        ) : (
          <Link color="textSecondary" key={key} href={path} aria-current="page">
            {name}
          </Link>
        )
      )}
    </Breadcrumbs>
  );
};

EmBreadcrumb.propTypes = {
  variant: PropTypes.string,
  maxItems: PropTypes.number,
  separator: PropTypes.string,
};

export default EmBreadcrumb;