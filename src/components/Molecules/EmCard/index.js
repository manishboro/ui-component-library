import React from "react";
import PropTypes from "prop-types";
import EmButton from "../EmButton";
import EmTypography from "components/Atoms/EmTypography";
import { Box, Card, CardActions, CardContent } from "@material-ui/core";
import "./index.scss";
const EmCard = ({
  variant,
  HeadingText = "",
  SecondaryText = "",
  imgSrc = "",
  imgAlt = "Image Description",
  buttonLabel = "",
  iconSrc = "",
  iconWidth,
  iconHeight,
  iconAlt = "",
  rounded = true,
}) => {
  return (

    <Card className={`em-card ${variant}`} variant="outlined">
      {imgSrc && <Box p="16px">
        <img className=""
          src={imgSrc}
          alt={imgAlt}
          style={{ "width": "100%" }}
        />
      </Box>}
      <CardContent className={`${iconSrc && 'cardContent'}`}>
        <Box flexShrink="initial" borderRadius={rounded && "8px"} overflow="hidden" mr="16px">
          {iconSrc && <img width={iconWidth} height={iconHeight} src={iconSrc} alt={iconAlt} style={{ "maxWidth": "100%" }} />}
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
  variant: PropTypes.string,
  HeadingText: PropTypes.string,
  SecondaryText: PropTypes.string,
  buttonLabel: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  iconSrc: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  iconAlt: PropTypes.string,
  rounded: PropTypes.bool,
};
