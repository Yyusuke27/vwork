import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Color from "../../shared/util/color";
import { Link } from "react-router-dom";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import StepFour from "../components/StepFour";
import { Route, Switch } from "react-router-dom";

import "../pages/Regist.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      backgroundColor: Color.VWORK_RED,
      color: Color.VWORK_WHITE,
      fontSize: 30,
      marginRight: 80,
      marginTop: "130%",
      width: 200,
      borderRadius: 15,
    },
  })
);

function getSteps() {
  return ["基本設定", "個人設定", "メンバー招待", "プロジェクト設定"];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return;
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    case 3:
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
  }
}

const StepOne = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div>
      <Dialog open keepMounted maxWidth="xl">
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <Switch>
          <Route exact path="/auth/regist/step2">
            <StepTwo />
          </Route>
          <Route exact path="/auth/regist/step3">
            <StepThree />
          </Route>
          <Route exact path="/auth/regist/step4">
            <StepFour />
          </Route>
        </Switch>
        <DialogActions>
          <Link to="/auth/regist/step1" style={{ textDecoration: "none" }}>
            <Button className={classes.button} onClick={handleNext}>
              NEXT
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StepOne;
