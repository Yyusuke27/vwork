import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Color from "../../shared/util/color";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Container from "@material-ui/core/Container";

import "../pages/Regist.css";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFinish from "./StepFinish";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      backgroundColor: Color.VWORK_RED,
      color: Color.VWORK_WHITE,
      fontSize: 30,

      position: "absolute",
      top: "80%",
      right: "15%",
      width: 200,
      borderRadius: 15,
    },
    dialog: {
      position: "relative",
    },
    eachcomponent: {
      position: "absolute",
      left: "17%",
      top: "20%",
    },
    finishcomponent: {
      position: "absolute",
      left: "28%",
      top: "40%",
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
    default:
      return <StepFinish />;
  }
}

const StepBoard = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div>
      <Dialog open keepMounted maxWidth="xl" className={classes.dialog}>
        <Container maxWidth="md">
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
            <div className={classes.finishcomponent}>
              {getStepComponent(activeStep)}
            </div>
          ) : (
            <div className={classes.eachcomponent}>
              {getStepComponent(activeStep)}
            </div>
          )}

          <DialogActions>
            <Button
              variant="contained"
              className={classes.button}
              onClick={handleNext}
            >
              NEXT
            </Button>
          </DialogActions>
        </Container>
      </Dialog>
    </div>
  );
};

export default StepBoard;
