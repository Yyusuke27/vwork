import React from "react";
import { useDispatch } from "react-redux";
import Color from "../../shared/util/color";
import FormArea from "../components/FormArea";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { fetchAsyncResetPassword } from "../authSlice";
import { toggleLoading } from "../../appSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  formArea: {
    backgroundColor: Color.VWORK_BLACK,
    paddingTop: theme.spacing(8),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  image: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/auth/reset_password.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundColor: Color.VWORK_WHITE,
    backgroundSize: "60%",
    backgroundPosition: "center",
  },
}));

const ResetPassword = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const resetToken = window.location.search.slice(1);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        item
        container
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        direction="column"
        alignItems="center"
        square
        className={classes.formArea}
      >
        <FormArea buttonPath="/auth/login" buttonText="ログイン">
          <Typography component="h1" variant="h5">
            パスワード再設定
          </Typography>
          <Formik
            initialValues={{ password: "" }}
            validationSchema={Yup.object().shape({
              password: Yup.string()
                .min(6, "6字以上入力してください")
                .required("パスワードは必須です。"),
            })}
            onSubmit={async (value) => {
              dispatch(toggleLoading(true));
              await dispatch(
                fetchAsyncResetPassword({
                  resetToken,
                  password: value.password,
                })
              );
            }}
          >
            <Form className={classes.form}>
              <Field
                component={TextField}
                name="password"
                type="password"
                label="新規パスワード*"
                variant="outlined"
                margin="normal"
                fullWidth
                id="password"
              />
              <br />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                設定する
              </Button>
            </Form>
          </Formik>
        </FormArea>
      </Grid>
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
    </Grid>
  );
};

export default ResetPassword;
