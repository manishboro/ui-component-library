import React from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import "./index.scss"

const EmSteppers = ({
  activeStep,
  steps,
  orientation = "horizontal",
  variant = "icons",
  labelPosition = "bottom"
}) => {
  return (
    <div className={`em-steppers ${variant} ${labelPosition}`}>
      <Stepper orientation={orientation} activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => {
          return (
            <Step key={index}>
              <StepLabel className="stepLabel">
                {variant === "icons" && <div className="text">{index + 1}</div>}
                {step.label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

export default EmSteppers;