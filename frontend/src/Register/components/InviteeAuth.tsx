import React, { useCallback, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Color from "../../shared/util/color";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { Form, Field, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { toggleLoading } from "../../appSlice";
import { fetchAsyncInvitation } from "../registerSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  })
);

const InviteeAuth = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const getInvitation = useCallback(
    async (query) => {
      const invitationParams = {
        invitation: {
          invitationToken: query
        }
      }
      await dispatch(fetchAsyncInvitation(invitationParams));
    },
    [dispatch]
  );

  // TODO: emailはapiで取得
  // PW、確認用PWだけ入力させる。
  // registrationがtrueだったら参加する(ログイン)ボタンのみ
  useEffect(() => {
    localStorage.clear();
    const query = window.location.search.slice(1);
    localStorage.setItem("Itoken", query);
    dispatch(toggleLoading(true));
    getInvitation(query);
    dispatch(toggleLoading(false));
  }, [dispatch, getInvitation]);

  return (
    <>
      <DialogTitle id="alert-dialog-slide-title">
        <Box mt={5}>
          <Typography variant="h2">
            <span style={{ color: Color.VWORK_RED }}>VWORK</span>
            へようこそ
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box mt={2}>
          <DialogContentText id="alert-dialog-slide-description">
            これからVWORKを活用するための設定をして頂きます。
            <br />
            「NEXT」を押して次のステップへ進んで下さい。
          </DialogContentText>
          <Typography component="h1" variant="h5">
            会員登録
          </Typography>
          <Formik
            initialValues={{ email: "", password: "", password_confirmation: "" }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("有効なメールアドレスを入力してください。")
                .required("emailは必須です。"),
              password: Yup.string()
                .min(6, "6字以上入力してください")
                .required("パスワードは必須です。"),
              password_confirmation: Yup.string()
                .oneOf([Yup.ref('password')], 'passwordが一致しません。')
                .required("パスワード(確認)は必須です。"),
            })}
            onSubmit={async (value) => {
              dispatch(toggleLoading(true));
              // await dispatch(fetchAsyncSignup(value));
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
              <Field
                component={TextField}
                type="password"
                label="パスワード(確認)*"
                fullWidth
                variant="outlined"
                margin="normal"
                name="password_confirmation"
                id="password_confirmation"
              />
              <br />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                会員登録
              </Button>
            </Form>
          </Formik>
        </Box>
      </DialogContent>
      <DialogActions>
        <Link to="/register/invitee/step1" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
          >
            NEXT
          </Button>
        </Link>
      </DialogActions>
    </>
  );
};

export default InviteeAuth;
