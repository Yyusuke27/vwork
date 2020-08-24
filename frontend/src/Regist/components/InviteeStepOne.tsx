import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import {
  editInviteUser,
  selectInviteUser,
  selectInviteUserMail,
} from "../registSlice";

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
  })
);

const InviteeStepOne = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const inviteUserState = useSelector(selectInviteUser);

  const inviteeMail = useSelector(selectInviteUserMail);

  if (inviteUserState.registration) {
    history.push("/regist/invitee/step2");
  }

  return (
    <>
      <DialogTitle id="alert-dialog-slide-title">
        <Box mt={5}>
          <Typography variant="h4">基本設定</Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
      </DialogContent>
      <Formik
        initialValues={{ email: inviteeMail, password: "" }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("有効なメールアドレスを入力してください。")
            .required("emailは必須です。"),
          password: Yup.string()
            .min(6, "6字以上入力してください")
            .required("パスワードは必須です。"),
        })}
        onSubmit={(value) => {
          const updateUserData = {
            ...inviteUserState,
            ...value,
          };
          dispatch(editInviteUser(updateUserData));
          history.push("/regist/invitee/step2");
        }}
      >
        <Form>
          <Field
            component={TextField}
            name="email"
            type="email"
            label="メールアドレス*"
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            value={inviteeMail}
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

export default InviteeStepOne;
