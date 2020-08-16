import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
import {
  selectAddButtonAfterTask,
  toggleAddButtonAfterTask,
} from "../../../appSlice";
import { selectWorkspace } from "../../../Auth/authSlice";
import { fetchAsyncTasks, selectTasks, setTodaysDoneTasks } from "../taskSlice";
import * as Yup from "yup";
import { Field, Form, Formik, FieldArray } from "formik";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { CheckboxWithLabel } from "formik-material-ui";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      position: "absolute",
      top: 25,
      right: 50,
    },
  })
);

const NewTaskAddAfterWorkDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const addButtonAfterTask = useSelector(selectAddButtonAfterTask);

  const tasksData = useSelector(selectTasks);
  const workspace = useSelector(selectWorkspace);

  const getTasks = useCallback(
    async (workspace) => {
      await dispatch(fetchAsyncTasks({ workspace }));
    },
    [dispatch]
  );

  useEffect(() => {
    getTasks(workspace);
  }, [getTasks, workspace]);

  interface TaskFormValues {
    tasks: string[];
  }

  const initialValues: TaskFormValues = {
    tasks: [],
  };
  return (
    <>
      <VwDrawer
        open={addButtonAfterTask}
        click={() => dispatch(toggleAddButtonAfterTask(false))}
      >
        <Container maxWidth="md">
          <Box py={4}>
            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object().shape({})}
              onSubmit={(values, actions) => {
                actions.setSubmitting(false);
                dispatch(setTodaysDoneTasks(values.tasks));
              }}
            >
              {({ values }) => (
                <Form>
                  <FieldArray
                    name="tasks"
                    render={(arrayHelpers) => (
                      <div>
                        <Box
                          borderBottom={1}
                          width="80%"
                          paddingBottom={1}
                          marginBottom={2}
                        >
                          <Typography variant="h5" component="h5">
                            今日のタスク
                          </Typography>
                        </Box>
                        {tasksData.todaysTasks.map((todaysTask, index) => (
                          <div key={`todaysTask-${index}`}>
                            <Field
                              component={CheckboxWithLabel}
                              Label={{ label: todaysTask.name }}
                              name="tasks"
                              type="checkbox"
                              value={todaysTask._id}
                              checked={values.tasks.includes(todaysTask._id)}
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => {
                                if (e.target.checked) {
                                  arrayHelpers.push(todaysTask._id);
                                } else {
                                  const idx = values.tasks.indexOf(
                                    todaysTask._id
                                  );
                                  arrayHelpers.remove(idx);
                                }
                              }}
                              icon={<RadioButtonUncheckedIcon />}
                              checkedIcon={<RadioButtonCheckedIcon />}
                            />
                          </div>
                        ))}
                        <br />
                        <Box
                          borderBottom={1}
                          width="80%"
                          paddingBottom={1}
                          marginBottom={2}
                        >
                          <Typography variant="h5" component="h5">
                            タスク一覧
                          </Typography>
                        </Box>
                        {tasksData.data.map((task, index) => (
                          <div key={`task-${index}`}>
                            <Field
                              component={CheckboxWithLabel}
                              Label={{ label: task.name }}
                              name="tasks"
                              type="checkbox"
                              value={task._id}
                              checked={values.tasks.includes(task._id)}
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => {
                                if (e.target.checked) {
                                  arrayHelpers.push(task._id);
                                } else {
                                  const idx = values.tasks.indexOf(task._id);
                                  arrayHelpers.remove(idx);
                                }
                              }}
                              icon={<RadioButtonUncheckedIcon />}
                              checkedIcon={<RadioButtonCheckedIcon />}
                            />
                          </div>
                        ))}
                        <br />
                        <DialogActions>
                          <Button
                            type="submit"
                            className={classes.button}
                            size="large"
                            variant="contained"
                            color="primary"
                          >
                            追加
                          </Button>
                        </DialogActions>
                      </div>
                    )}
                  />
                </Form>
              )}
            </Formik>
          </Box>
        </Container>
      </VwDrawer>
    </>
  );
};

export default NewTaskAddAfterWorkDrawer;
