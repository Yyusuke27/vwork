import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import * as Yup from "yup";
import { Field, Form, Formik, FieldArray } from "formik";
import { TextField } from "formik-material-ui";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Box } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { editInvitations } from "../registSlice";

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

const StepThree = () => {
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
        initialValues={{
          invitations: [{ name: "", email: "" }],
        }}
        validationSchema={Yup.object().shape({
          invitations: Yup.array().of(
            Yup.object().shape({
              email: Yup.string()
                .email("有効なメールアドレスを入力してください。")
                .required("emailは必須です。"),
              name: Yup.string().required("氏名は必須です。"),
            })
          ),
        })}
        onSubmit={(values) => {
          dispatch(editInvitations(values.invitations));
          history.push("/regist/step/4");
        }}
      >
        {({ values }) => (
          <Form className={classes.formArea}>
            <FieldArray
              name="invitations"
              render={(arrayHelpers) => (
                <div>
                  {values.invitations.map((invitation, index) => (
                    <div key={index}>
                      <Grid container spacing={3}>
                        <Grid item xs={5}>
                          <Field
                            component={TextField}
                            label="氏名*"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id={`name.${index}`}
                            name={`invitations[${index}].name`}
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <Field
                            component={TextField}
                            type="email"
                            label="メールアドレス*"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id={`email.${index}`}
                            name={`invitations[${index}].email`}
                          />
                        </Grid>
                        <Grid item xs={1}>
                          <Box display="flex" alignItems="center" height="100%">
                            <IconButton
                              aria-label="delete"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                        </Grid>
                      </Grid>
                    </div>
                  ))}
                  <br />
                  <Button
                    color="primary"
                    onClick={() => arrayHelpers.push({ name: "", email: "" })}
                  >
                    さらに追加
                  </Button>
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
                </div>
              )}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StepThree;
