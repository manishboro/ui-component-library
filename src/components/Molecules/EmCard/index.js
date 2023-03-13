import React from "react";
import PropTypes from "prop-types";
import EmButton from "../EmButton";
import EmTypography from "components/Atoms/EmTypography";
import { Card, CardActions, CardContent } from "@material-ui/core";
const EmCard = ({
  HeadingText = "",
  SecondaryText = "",
  imgSrc = "",
  imgAlt = "Image Description",
  buttonLabel = "",
  iconSrc = "",
  iconAlt = "",
}) => {
  return (

    <Card variant="outlined">
      {imgSrc && <div className='pb-6'>
        <img className=""
          src={imgSrc}
          alt={imgAlt} />
      </div>}
      <CardContent className={`${iconSrc && ''}`}>
        {iconSrc && <img width={44} height={44} src={iconSrc} alt={iconAlt} />}
        <div className=''>
          <EmTypography type={6}> {HeadingText} </EmTypography>
          <EmTypography variant="bodySmall"> {SecondaryText} </EmTypography>
        </div>
      </CardContent>
      {buttonLabel &&
        <CardActions>
          <EmButton children={buttonLabel} size="small" className="mt-6" />
        </CardActions>
      }
    </Card>
  );
};

export default EmCard;

EmCard.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  cardPadding: PropTypes.string,
  variant: PropTypes.string,
  HeadingText: PropTypes.string,
  SecondaryText: PropTypes.string,
  HeadingClass: PropTypes.string,
  SecondaryTextClass: PropTypes.string,
  buttonLabel: PropTypes.string,
};
