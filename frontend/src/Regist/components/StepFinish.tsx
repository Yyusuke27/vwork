import React from "react";
import { useHistory } from "react-router";
import Color from "../../shared/util/color";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

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
  })
);

function getSteps() {
  return ["基本設定", "個人設定", "メンバー招待", "プロジェクト設定"];
}

const StepFinish = () => {
  const classes = useStyles();
  const steps = getSteps();

  const history = useHistory();
  const pageChangeHandler = () => {
    history.push("/");
    history.go(0);
  };
  return (
    <>
      <div className={classes.root}>
        <Stepper
          activeStep={Number(window.location.pathname.slice(-1)) - 1}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <Typography variant="h3">
        <span style={{ color: Color.VWORK_RED }}>VWORK</span>
        の設定は完了しました。
      </Typography>
      <DialogActions>
        <Button
          variant="contained"
          className={classes.button}
          color="primary"
          onClick={pageChangeHandler}
        >
          NEXT
        </Button>
      </DialogActions>
    </>
  );
};

export default StepFinish;
