import React from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import "../pages/RegistUser.css";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFinish from "./StepFinish";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      position: "absolute",
      fontSize: 30,

      width: 200,
      borderRadius: 15,
      right: "0%",
      bottom: "0%",
      marginBottom: 40,
      marginRight: 80,
    },
    finishComponent: {
      position: "absolute",
      left: "0%",
      top: "0%",
      marginTop: 250,
      marginLeft: 200,
    },
    eachComponent: {
      position: "absolute",
      left: "17%",
      top: "20%",
    },
  })
);

function getSteps() {
  return ["基本設定", "個人設定", "メンバー招待", "プロジェクト設定"];
}

function getStepComponent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return <StepOne />;
    case 1:
      return <StepTwo />;
    case 2:
      return <StepThree />;
    case 3:
      return <StepFour />;
    case 4:
      return <StepFinish />;
  }
}

const RegistStep = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const history = useHistory();
  const pageChangeHandler = () => {
    history.push("/");
    history.go(0);
  };

  return (
    <>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      {activeStep === steps.length ? (
        <div className={classes.finishComponent}>
          {getStepComponent(activeStep)}
        </div>
      ) : (
        <div className={classes.eachComponent}>
          {getStepComponent(activeStep)}
        </div>
      )}
      <DialogActions>
        {activeStep === steps.length ? (
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={pageChangeHandler}
          >
            NEXT
          </Button>
        ) : (
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={handleNext}
          >
            NEXT
          </Button>
        )}
      </DialogActions>
    </>
  );
};

export default RegistStep;
