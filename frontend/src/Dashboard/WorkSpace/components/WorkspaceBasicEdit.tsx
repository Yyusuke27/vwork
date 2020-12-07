import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { fetchAsyncUpdateWorkspace } from "../../../WorkSpaces/workspaceSlice";
import {
  fetchAsyncCurrentUser,
} from "../../../Auth/authSlice";
import { workspacePathId } from "../../../shared/util/workspacePathId"

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: "16px",
    marginBottom: "8px",
    height: "56px",
  },
}));

const WorkspaceBasicEdit = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <Box borderBottom={1} width="90%">
        <Typography variant="h5" component="h2">
          基本情報編集
        </Typography>
      </Box>
      <Formik
        initialValues={{ name: "" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("ワークスペース名は必須です。"),
        })}
        onSubmit={async (value, action) => {
          await dispatch(
            fetchAsyncUpdateWorkspace(value)
          );
          await dispatch(fetchAsyncCurrentUser(workspacePathId));
          action.resetForm({});
        }}
      >
        <Form className={classes.form}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Field
                component={TextField}
                name="name"
                label="ワークスペース名*"
                variant="outlined"
                margin="normal"
                fullWidth
                id="name"
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                更新する
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </>
  );
};

export default WorkspaceBasicEdit;
