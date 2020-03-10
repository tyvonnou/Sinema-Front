import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

const defaultData = {
  title: "title",
  description: "description",
  releaseDate: "releaseDate"
};

function getSteps() {
  return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(stepIndex : number, props : any) {
  switch (stepIndex) {
    case 0:
      return <Titre {...props} />;
    case 1:
      return <Description {...props} />;
    case 2:
      return <Date {...props} />;
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [inputs, setInputs] = useState({title: '', description: ''});
  const [dates, setDates] = useState({releaseDate: new Date()});
  const props = {inputs, setInputs, dates, setDates};

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs(inputs => ({...inputs, [name]: value}));
  }

  const handleDateChange = (date : Date) => {
    setDates(dates => ({...dates, releaseDate: date}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    console.log(dates);
    /*const test = format(new Date(dates.releaseDate), 'isoDate')
    console.log("enregistrer " + JSON.stringify(inputs))
    axios.post('/Enregistrer', {}, {
      params: {
        ...inputs,
        ...dates
      }
    }).then(res => {
      console.log(JSON.stringify(res.data))
      this.setState({errLivre : res.data})
    })*/
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep, props)}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}