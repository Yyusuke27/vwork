import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { editUser } from "../registSlice";
import { Field, Form, Formik } from "formik";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { TextField } from "formik-material-ui";

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

const StepTwo = () => {
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
        initialValues={{ name: "", position: "" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("氏名は必須です。"),
          position: Yup.string().required("役職・担当は必須です。"),
        })}
        onSubmit={(value) => {
          dispatch(editUser(value));
          history.push("/regist/step/3");
        }}
      >
        <Form>
          <Field
            component={TextField}
            name="name"
            label="氏名*"
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
          />
          <br />
          <Field
            component={TextField}
            name="position"
            label="役職・担当"
            placeholder="経営企画"
            variant="outlined"
            margin="normal"
            fullWidth
            id="position"
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

export default StepTwo;
