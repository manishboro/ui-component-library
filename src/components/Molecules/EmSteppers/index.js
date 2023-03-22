import React from 'react';
import PropTypes from "prop-types";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import "./index.scss"

const EmTimeline = ({
  steps,
  orientation = "horizontal"
}) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <>
      <Stepper alternativeLabel nonLinear activeStep={activeStep} orientation={orientation}>
        {steps.map((list, index) => {
          const stepProps = {};
          const buttonProps = {};
          return (
            <Step key={list.label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                {...buttonProps}
              >
                {list.label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
}

EmTimeline.propTypes = {
  orientation: PropTypes.string,
};
export default EmTimeline;
