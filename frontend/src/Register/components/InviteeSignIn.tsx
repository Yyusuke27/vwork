import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Form, Field, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { toggleLoading } from "../../appSlice";
import { fetchAsyncInviteeSignIn } from "../registerSlice";

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

interface InviteeSignInProps {
  email: string;
}

const InviteeSignIn: FC<InviteeSignInProps> = ({ email }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Box mt={2}>
      <Typography component="h1" variant="h5">
        ログイン
      </Typography>
      <Formik
        enableReinitialize={true}
        initialValues={{ email: email, password: "", password_confirmation: "" }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("有効なメールアドレスを入力してください。")
            .required("emailは必須です。"),
          password: Yup.string()
            .min(6, "6字以上入力してください")
            .required("パスワードは必須です。"),
        })}
        onSubmit={async (value) => {
          dispatch(toggleLoading(true));
          await dispatch(fetchAsyncInviteeSignIn(value));
          dispatch(toggleLoading(false));
        }}
      >
        {(props) => (
          <Form className={classes.form}>
          <Field
            component={TextField}
            name="email"
            type="email"
            label="メールアドレス*"
            variant="outlined"
            margin="normal"
            fullWidth
            disabled
            id="email"
            value={props.values.email}
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
        )}
      </Formik>
      <Link to="/auth/forgot">
        <Typography variant="body2" className="vwork-red">
          パスワードをお忘れの方はこちら
        </Typography>
      </Link>
    </Box>
  )
}

export default InviteeSignIn;