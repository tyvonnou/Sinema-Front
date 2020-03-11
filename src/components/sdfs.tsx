/*import React, { useState, Fragment } from 'react';
import { Button, Stepper, Step, StepLabel } from '@material-ui/core';
import FormPartA from './FormPartA';
import FormPartB from './FormPartB';
import FormPartC from './FormPartC';

const steps = ['Part A', 'Part B', 'Part C'];

function MultiStepForm(props) {

  const { field1, field2, field3, field4, field5, field6, } = props;

  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    field1, field2, field3, field4, field5, field6
  });

  const handleNext = (newValues) => {
    setFormValues({ ...formValues, ...newValues });
    setActiveStep(activeStep + 1);
  };

  const handleBack = (newValues) => {
    setFormValues({ ...formValues, ...newValues });
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    const isLastStep = (activeStep === steps.length - 1);
    switch (step) {
      case 0:
        return <BasicFormA {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext}/>;
      case 1:
        return <BasicFormB {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext}/>;
      case 2:
        return <BasicFormC {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext}/>;
      default:
        throw new Error('Mis-step!');
    }
  }

  return (
    <div className="MultiStepForm">
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Fragment>
        {activeStep === steps.length ? (
           <p>You're done!<p>
        ) : (
        <Fragment> {getStepContent(activeStep)} <Fragment>
        )}
      <Fragment>
    </div>
  );
}

export default MultiStepForm;*/
export{}