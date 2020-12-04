import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { Field, Form, Formik, FieldArray } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import {
  selectAddButtonAfterTask,
  toggleAddButtonAfterTask,
} from "../../../appSlice";
import { selectWorkspace } from "../../../Auth/authSlice";
import {
  fetchAsyncTasks,
  selectTasks,
  setTodaysDoneTasks,
  selectTodaysDoneTasks,
} from "../taskSlice";

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

  const todaysDoneTasks = useSelector(selectTodaysDoneTasks);

  const tasksData = useSelector(selectTasks);
  const workspace = useSelector(selectWorkspace);

  const getTasks = useCallback(
    async (workspace) => {
      await dispatch(fetchAsyncTasks());
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
                        {tasksData.todaysTasks.length === 0 &&
                          tasksData.tasks.length === 0 && (
                            <p>タスクがありません。</p>
                          )}
                        {tasksData.todaysTasks.length > 0 && (
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
                        )}
                        {tasksData.todaysTasks &&
                          tasksData.todaysTasks.map((todaysTask, index) => (
                            <div key={`todaysTask-${index}`}>
                              <Field
                                component={CheckboxWithLabel}
                                Label={{ label: todaysTask.name }}
                                name="tasks"
                                type="checkbox"
                                value={todaysTask.id}
                                checked={
                                  todaysDoneTasks.includes(todaysTask.id) ||
                                  values.tasks.includes(todaysTask.id)
                                }
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                  if (e.target.checked) {
                                    arrayHelpers.push(todaysTask.id);
                                  } else {
                                    const idx = values.tasks.indexOf(
                                      todaysTask.id
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
                        {tasksData.tasks.length > 0 && (
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
                        )}
                        {tasksData.tasks &&
                          tasksData.tasks.map((task, index) => (
                            <div key={`task-${index}`}>
                              <Field
                                component={CheckboxWithLabel}
                                Label={{ label: task.name }}
                                name="tasks"
                                type="checkbox"
                                value={task.id}
                                checked={
                                  todaysDoneTasks.includes(task.id) ||
                                  values.tasks.includes(task.id)
                                }
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                  if (e.target.checked) {
                                    arrayHelpers.push(task.id);
                                  } else {
                                    const idx = values.tasks.indexOf(task.id);
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
