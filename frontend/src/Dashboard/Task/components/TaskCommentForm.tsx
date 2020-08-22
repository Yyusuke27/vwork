import React, { FC } from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

import "./Task.css";
import { useDispatch } from "react-redux";
import { fetchAsyncTaskComment, fetchAsyncTaskHistory } from "../taskSlice";
import { toggleLoading } from "../../../appSlice";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "16px",
    marginBottom: "8px",
    height: "56px",
  },
}));

interface TaskCommentFormProps {
  taskId: string;
}

const TaskCommentForm: FC<TaskCommentFormProps> = ({ taskId }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{ comment: "" }}
        validationSchema={Yup.object().shape({})}
        onSubmit={async (value, action) => {
          action.resetForm({});
          dispatch(toggleLoading(true));
          await dispatch(
            fetchAsyncTaskComment({ taskId, comment: value.comment })
          );
          await dispatch(fetchAsyncTaskHistory(taskId));
          dispatch(toggleLoading(false));
        }}
      >
        <Form>
          <Container className="commentForm">
            <Grid container justify="flex-start" spacing={1}>
              <Grid item xs={11}>
                <Field
                  component={TextField}
                  name="comment"
                  label="コメント"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  id="comment"
                  required
                />
              </Grid>
              <Grid item xs={1}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.button}
                >
                  送信
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Form>
      </Formik>
    </>
  );
};

export default TaskCommentForm;
