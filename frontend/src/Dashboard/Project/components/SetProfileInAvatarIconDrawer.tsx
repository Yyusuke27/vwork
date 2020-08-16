import React from "react";
import { useSelector, useDispatch } from "react-redux";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import {
  selectSetProfileClicked,
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
              name: Yup.string().required("プロジェクト名を入力してください。"),
            })}
            onSubmit={(values, actions) => {
              console.log(values);
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

export default SetProfileInAvatarIconDrawer;
