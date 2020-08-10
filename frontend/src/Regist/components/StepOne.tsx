import React from "react";
import { Form, Field, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { editWorkspace } from "../registSlice";
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

const StepOne = () => {
  const classes = useStyles();
  const steps = getSteps();

  const dispatch = useDispatch();
  const history = useHistory();
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
      <Formik
        initialValues={{ workspace: "" }}
        validationSchema={Yup.object().shape({
          workspace: Yup.string().required("ワークスペース名は必須です。"),
        })}
        onSubmit={(value) => {
          dispatch(editWorkspace(value.workspace));
          history.push("/regist/step/2");
        }}
      >
        <Form>
          <Field
            component={TextField}
            name="workspace"
            label="ワークスペース名*"
            placeholder="会社名・チーム名"
            variant="outlined"
            margin="normal"
            fullWidth
            id="workspace"
          />
          <DialogActions>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.button}
              color="primary"
            >
              NEXT
            </Button>
          </DialogActions>
        </Form>
      </Formik>
    </>
  );
};

export default StepOne;
