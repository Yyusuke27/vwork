import React from "react";
import { useSelector, useDispatch } from "react-redux";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import {
  selectAddProjectButton,
  toggleAddProjectButton,
  toggleLoading,
} from "../../../appSlice";
import {
  fetchAsyncAllMyProjects,
  fetchAsyncAllProjects,
  fetchAsyncCreateProject,
} from "../projectSlice";
import { selectWorkspace } from "../../../Auth/authSlice";

import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const NewProjectDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const addProjectClicked = useSelector(selectAddProjectButton);
  const workspace = useSelector(selectWorkspace);

  interface initialValuesType {
    name: string;
    description: string;
  }

  const initialValues: initialValuesType = {
    name: "",
    description: "",
  };

  return (
    <>
      <VwDrawer
        open={addProjectClicked}
        click={() => dispatch(toggleAddProjectButton(false))}
      >
        <Container maxWidth="md">
          <Box mt={5} mb={2} borderBottom={1}>
            <Typography variant="h5">プロジェクト追加</Typography>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .max(18, "18字以内で入力してください。")
                .required("プロジェクト名を入力してください。"),
              description: Yup.string().required(
                "プロジェクトの詳細を入力してください。"
              ),
            })}
            onSubmit={async (values, actions) => {
              dispatch(toggleLoading(true));
              await dispatch(
                fetchAsyncCreateProject({
                  workspace: workspace,
                  projectData: {
                    name: values.name,
                    description: values.description,
                  },
                })
              );
              await dispatch(fetchAsyncAllMyProjects(workspace));
              await dispatch(fetchAsyncAllProjects(workspace));
              dispatch(toggleAddProjectButton(false));
              dispatch(toggleLoading(false));
            }}
          >
            <Form className={classes.form}>
              <Field
                component={TextField}
                name="name"
                label="プロジェクト名"
                variant="outlined"
                margin="normal"
                fullWidth
                id="name"
              />
              <br />
              <Field
                component={TextField}
                label="詳細"
                fullWidth
                multiline
                variant="outlined"
                margin="normal"
                name="description"
                id="description"
                rows={4}
              />
              <br />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                作成
              </Button>
            </Form>
          </Formik>
        </Container>
      </VwDrawer>
    </>
  );
};

export default NewProjectDrawer;
