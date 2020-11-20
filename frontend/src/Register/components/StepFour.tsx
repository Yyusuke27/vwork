import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { toggleLoading } from "../../appSlice";
import { fetchAsyncRegisterUser } from "../registerSlice";
import { selectRegister } from "../registerSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    formArea: {
      overflowY: "scroll",
      overflowX: "hidden",
      height: "33vh",
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

const StepFour = () => {
  const classes = useStyles();
  const steps = getSteps();

  const dispatch = useDispatch();

  const regist = useSelector(selectRegister);

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
        initialValues={{ name: "", description: "" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("プロジェクト名は必須です。"),
          description: Yup.string().required("プロジェクト詳細は必須です。"),
        })}
        onSubmit={async (value) => {
          const updatedRegister = { ...regist };
          updatedRegister.project = value;
          dispatch(toggleLoading(true));
          await dispatch(fetchAsyncRegisterUser(updatedRegister));
          dispatch(toggleLoading(false));
        }}
      >
        <Form className={classes.formArea}>
          <Field
            component={TextField}
            name="name"
            label="プロジェクト名*"
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
          />
          <br />
          <Field
            component={TextField}
            name="description"
            label="プロジェクト詳細"
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            id="description"
          />
          <DialogActions>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.button}
              color="primary"
            >
              登録
            </Button>
          </DialogActions>
        </Form>
      </Formik>
    </>
  );
};

export default StepFour;
