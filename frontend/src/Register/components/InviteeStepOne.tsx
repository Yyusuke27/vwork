import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
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
  fetchAsyncRegisterInvitee,
  selectInviteUserName,
} from "../registerSlice";
import { toggleLoading } from "../../appSlice";

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

  const inviteeName = useSelector(selectInviteUserName);

  return (
    <>
      <DialogTitle id="alert-dialog-slide-title">
        <Box mt={5}>
          <Typography variant="h4">プロフィール設定</Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
      </DialogContent>
      <Formik
        enableReinitialize={true}
        initialValues={{ name: inviteeName, position: "" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("氏名は必須です。"),
        })}
        onSubmit={async (value) => {
          const user_profile = {
            ...value,
          };
          const registerData = {
            user_profile,
          };
          dispatch(toggleLoading(true));
          await dispatch(fetchAsyncRegisterInvitee(registerData));
          dispatch(toggleLoading(false));
        }}
      >
        {(props) => (
          <Form>
            <Field
              component={TextField}
              name="name"
              label="氏名*"
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              value={props.values.name}
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
                登録
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default InviteeStepOne;
