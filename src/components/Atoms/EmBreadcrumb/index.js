import React from 'react';
import PropTypes from "prop-types";
import { Breadcrumbs, Link } from '@material-ui/core';
import "./index.scss";

const EmBreadcrumb = ({
  className = "em-breadcrumb",
  breadcrumbData
}) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" className={className}>
      {breadcrumbData.map(({ name, path }, key) =>
        key + 1 === breadcrumbData.length ? (
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
};

export default EmBreadcrumb;