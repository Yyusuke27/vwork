import React from "react";
import { useDispatch } from "react-redux";

import { Form, Field, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";

import Color from "../../shared/util/color";
import FormArea from "../components/FormArea";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { fetchAsyncLogin } from "../authSlice";
import { toggleLoading } from "../../appSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  formArea: {
    backgroundColor: Color.VWORK_BLACK,
    paddingTop: theme.spacing(8),
  },
  image: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/auth/login.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundColor: Color.VWORK_WHITE,
    backgroundSize: "60%",
    backgroundPosition: "center",
  },
  paper: {
    height: "70vh",
    padding: theme.spacing(10, 4),
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    backgroundColor: Color.VWORK_WHITE,
    borderRadius: 20,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logoIcon: {
    display: "inline-block",
    height: 32,
    width: 32,
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo192.png)`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    marginRight: theme.spacing(1),
  },
}));

const Login = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <div>
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
          <FormArea buttonPath="/auth/signup" buttonText="会員登録">
            <Typography component="h1" variant="h5">
              ログイン
            </Typography>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("有効なメールアドレスを入力してください。")
                  .required("emailは必須です。"),
                password: Yup.string().required("パスワードは必須です。"),
              })}
              onSubmit={async (value) => {
                dispatch(toggleLoading(true));
                await dispatch(fetchAsyncLogin(value));
                dispatch(toggleLoading(false));
              }}
            >
              <Form className={classes.form}>
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="メールアドレス*"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                />
                <br />
                <Field
                  component={TextField}
                  type="password"
                  label="パスワード*"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  name="password"
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
                  ログイン
                </Button>
              </Form>
            </Formik>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  パスワードをお忘れの方はこちら
                </Link>
              </Grid>
            </Grid>
          </FormArea>
        </Grid>
        <Grid item xs={false} sm={4} md={6} className={classes.image} />
      </Grid>
    </div>
  );
};

export default Login;
