import React from "react";
import PropTypes from "prop-types";
import EmButton from "../EmButton";
import EmTypography from "components/Atoms/EmTypography";
import { Box, Card, CardActions, CardContent } from "@material-ui/core";
import "./index.scss";
const EmCard = ({
  HeadingText = "",
  SecondaryText = "",
  imgSrc = "",
  imgAlt = "Image Description",
  buttonLabel = "",
  iconSrc = "",
  iconWidth,
  iconHeight,
  iconAlt = "",
}) => {
  return (

    <Card className="em-card" variant="outlined">
      {imgSrc && <Box pb="16px">
        <img className=""
          src={imgSrc}
          alt={imgAlt}
        />
      </Box>}
      <CardContent className={`${iconSrc && 'cardContent'}`}>
        <Box flexShrink="initial" borderRadius="8px" overflow="hidden" mr="16px">
          {iconSrc && <img width={iconWidth} height={iconHeight} src={iconSrc} alt={iconAlt} />}
        </Box>
        <Box width="100%">
          <Box fontWeight={700} mb="4px">
            <EmTypography type={"body2"}> {HeadingText} </EmTypography>
          </Box>
          <Box fontWeight={400} color="#999CA0">
            {SecondaryText}
          </Box>
        </Box>

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
