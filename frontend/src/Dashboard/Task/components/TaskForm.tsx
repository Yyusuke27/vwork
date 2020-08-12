import React, { FC } from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import moment from "moment";
import { useSelector } from "react-redux";

import { selectWorkspace } from "../../../Auth/authSlice";

import { TextField, Select, CheckboxWithLabel } from "formik-material-ui";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { Box, Slider } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "formik-material-ui-pickers";
import { ja } from "date-fns/locale";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PersonIcon from "@material-ui/icons/Person";
import FlagIcon from "@material-ui/icons/Flag";
import DateRangeIcon from "@material-ui/icons/DateRange";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightIcon from "@material-ui/icons/Highlight";
import SubjectIcon from "@material-ui/icons/Subject";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    labelIcon: {
      marginRight: theme.spacing(1),
    },
    formContent: {
      marginBottom: theme.spacing(1),
    },
  })
);

const TASK_STATE = ["TODO", "進行中", "完了"];
const TASK_PRIORITY = ["低", "中", "高"];

interface TaskFormProps {
  users: { name: string; id: string }[];
  taskUser?: string;
  projects: { id: string; name: string }[];
  submitFunction: (
    value: {
      user: string;
      name: string;
      description: string;
      startDateAt: string;
      endDateAt: string;
      state: number;
      progress: number;
      priority: number;
      project: string | null;
      todaysTask: boolean;
    },
    workspace: string
  ) => Promise<void>;
}

const TaskForm: FC<TaskFormProps> = ({
  users,
  projects,
  taskUser,
  submitFunction,
}) => {
  const classes = useStyles();
  const workspace = useSelector(selectWorkspace);

  const user = taskUser ? taskUser : "";

  const today = moment().toString();
  const tomorrow = moment().add(1, "days").toString();

  interface TaskFormValues {
    user: string;
    name: string;
    description: string;
    startDateAt: string;
    endDateAt: string;
    state: number;
    progress: number;
    priority: number;
    project: string | null;
    todaysTask: boolean;
  }

  const initialValues: TaskFormValues = {
    user: user,
    name: "",
    description: "",
    startDateAt: today,
    endDateAt: tomorrow,
    state: 0,
    progress: 0,
    priority: 0,
    project: "",
    todaysTask: false,
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .max(24, "24文字以内で入力してください")
            .required("タスク名は必須です。"),
        })}
        onSubmit={async (value, actions) => {
          actions.setSubmitting(false);

          if (!value.project) {
            value.project = null;
          }

          await submitFunction(value, workspace);
        }}
      >
        {(props) => (
          <Form>
            <Grid container spacing={4}>
              <Grid item xs={10}>
                <Field
                  component={TextField}
                  name="name"
                  label="タスク名"
                  fullWidth
                  id="name"
                />
              </Grid>
              <Grid item xs={2}>
                <DialogActions>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    保存
                  </Button>
                </DialogActions>
              </Grid>
            </Grid>
            <FormControl className={classes.formControl}>
              <Field
                component={CheckboxWithLabel}
                type="checkbox"
                name="todaysTask"
                Label={{ label: "今日やる" }}
              />
            </FormControl>
            <Grid container className={classes.formContent}>
              <Grid item xs={2}>
                <Box height="100%" display="flex" alignItems="center">
                  <PersonIcon color="disabled" className={classes.labelIcon} />
                  担当者
                </Box>
              </Grid>
              <Grid item xs={8}>
                <FormControl className={classes.formControl}>
                  <Field
                    component={Select}
                    name="user"
                    id="user"
                    as="select"
                    defaultValue={user}
                    inputProps={{
                      id: "user",
                    }}
                  >
                    <MenuItem value="">
                      <em>未選択</em>
                    </MenuItem>
                    {users.map((user, index) => {
                      return (
                        <MenuItem value={user.id.toString()} key={index}>
                          {user.name.toString()}
                        </MenuItem>
                      );
                    })}
                  </Field>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className={classes.formContent}>
              <Grid item xs={2}>
                <Box height="100%" display="flex" alignItems="center">
                  <DateRangeIcon
                    color="disabled"
                    className={classes.labelIcon}
                  />
                  期日
                </Box>
              </Grid>
              <Grid item xs={8}>
                <FormControl className={classes.formControl}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ja}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Field
                          component={DatePicker}
                          name="startDateAt"
                          label="開始"
                          id="startDateAt"
                          value={props.values.startDateAt}
                        />
                      </Grid>
                      <Grid item>
                        <Field
                          component={DatePicker}
                          name="endDateAt"
                          label="終了"
                          id="endDateAt"
                          value={props.values.endDateAt}
                        />
                      </Grid>
                    </Grid>
                  </MuiPickersUtilsProvider>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className={classes.formContent}>
              <Grid item xs={2}>
                <Box height="100%" display="flex" alignItems="center">
                  <DashboardIcon
                    color="disabled"
                    className={classes.labelIcon}
                  />
                  プロジェクト
                </Box>
              </Grid>
              <Grid item xs={8}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="project">プロジェクト</InputLabel>
                  <Field
                    component={Select}
                    name="project"
                    id="project"
                    as="select"
                    inputProps={{
                      id: "project",
                    }}
                  >
                    {projects.map((project, index) => {
                      return (
                        <MenuItem value={project.id} key={index}>
                          {project.name}
                        </MenuItem>
                      );
                    })}
                  </Field>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className={classes.formContent}>
              <Grid item xs={2}>
                <Box height="100%" display="flex" alignItems="center">
                  <CheckCircleIcon
                    color="disabled"
                    className={classes.labelIcon}
                  />
                  タスク状況
                </Box>
              </Grid>
              <Grid item xs={8}>
                <FormControl className={classes.formControl}>
                  <Field
                    component={Select}
                    name="state"
                    id="state"
                    as="select"
                    inputProps={{
                      id: "state",
                    }}
                  >
                    <MenuItem value={0}>{TASK_STATE[0]}</MenuItem>
                    <MenuItem value={1}>{TASK_STATE[1]}</MenuItem>
                    <MenuItem value={2}>{TASK_STATE[2]}</MenuItem>
                  </Field>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className={classes.formContent}>
              <Grid item xs={2}>
                <Box height="100%" display="flex" alignItems="center">
                  <HighlightIcon
                    color="disabled"
                    className={classes.labelIcon}
                  />
                  優先度
                </Box>
              </Grid>
              <Grid item xs={8}>
                <FormControl className={classes.formControl}>
                  <Field
                    component={Select}
                    name="priority"
                    id="priority"
                    as="select"
                    inputProps={{
                      id: "priority",
                    }}
                  >
                    <MenuItem value={0}>{TASK_PRIORITY[0]}</MenuItem>
                    <MenuItem value={1}>{TASK_PRIORITY[1]}</MenuItem>
                    <MenuItem value={2}>{TASK_PRIORITY[2]}</MenuItem>
                  </Field>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container className={classes.formContent}>
              <Grid item xs={2}>
                <Box height="100%" display="flex" alignItems="center">
                  <FlagIcon color="disabled" className={classes.labelIcon} />
                  進捗
                </Box>
              </Grid>
              <Grid item xs={8}>
                <FormControl className={classes.formControl}>
                  <Slider
                    color="secondary"
                    name="progress"
                    id="progress"
                    defaultValue={0}
                    min={0}
                    max={100}
                    step={10}
                    valueLabelDisplay="auto"
                    onChange={(event, value) =>
                      props.setFieldValue("progress", value)
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={2}>
                <Box display="flex" alignItems="center">
                  <SubjectIcon color="disabled" className={classes.labelIcon} />
                  詳細
                </Box>
              </Grid>
              <Grid item xs={8}>
                <FormControl className={classes.formControl}>
                  <Field
                    component={TextField}
                    name="description"
                    label="詳細"
                    variant="filled"
                    margin="none"
                    fullWidth
                    multiline
                    id="description"
                    rows={4}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
