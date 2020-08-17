import React from "react";
import { useSelector, useDispatch } from "react-redux";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import {
  selectSetProfileClicked,
  toggleLoading,
  toggleSetProfileClicked,
} from "../../../appSlice";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Color from "../../../shared/util/color";
import { fetchAsyncUpdateUserProfile } from "../../../Dashboard/dashboardSlice";
import {
  selectProfile,
  selectUser,
  selectWorkspace,
} from "../../../Auth/authSlice";

const useStyles = makeStyles((theme) => ({
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
}));

const SetProfileInAvatarIconDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const profileClicked = useSelector(selectSetProfileClicked);
  const workspace = useSelector(selectWorkspace);
  const user = useSelector(selectUser);
  const profile = useSelector(selectProfile);

  interface initialValuesType {
    name: string;
    email: string;
    position: string;
  }

  const initialValues: initialValuesType = {
    name: user.name,
    email: user.email,
    position: profile ? profile.position : "",
  };

  return (
    <>
      <VwDrawer
        open={profileClicked}
        click={() => dispatch(toggleSetProfileClicked(false))}
      >
        <Container maxWidth="md">
          <Box mt={5} mb={2} borderBottom={1}>
            <Typography variant="h5">プロフィール設定</Typography>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("氏名は必須です。"),
            })}
            onSubmit={async (values, actions) => {
              actions.setSubmitting(false);

              dispatch(toggleLoading(true));
              await dispatch(
                fetchAsyncUpdateUserProfile({
                  workspace,
                  userId: user._id,
                  bodyData: values,
                })
              );
              dispatch(toggleLoading(false));
              dispatch(toggleSetProfileClicked(false));
            }}
          >
            {(props) => (
              <Form className={classes.form}>
                <Field
                  component={TextField}
                  name="name"
                  label="氏名*"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="name"
                  value={props.values.name}
                >
                  {props.values.name}
                </Field>
                <br />
                <Field
                  component={TextField}
                  label="メールアドレス"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  name="email"
                  id="email"
                  value={props.values.email}
                >
                  {props.values.email}
                </Field>
                <Field
                  component={TextField}
                  label="役職・担当"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  name="position"
                  id="position"
                  value={props.values.position}
                >
                  {props.values.position}
                </Field>
                <br />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  更新
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </VwDrawer>
    </>
  );
};

export default SetProfileInAvatarIconDrawer;
