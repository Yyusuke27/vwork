import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import moment from "moment";
import _ from "lodash";
import DateFnsUtils from "@date-io/date-fns";
import { ja } from "date-fns/locale";
import { TextField, Select, CheckboxWithLabel } from "formik-material-ui";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { Box, Slider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "formik-material-ui-pickers";
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
import { selectSelectedMembers } from "../../dashboardSlice";
import { selectProject } from "../../Project/projectSlice";
import { toggleLoading } from "../../../appSlice";
import { workspacePathId } from "../../../shared/util/workspacePathId"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formContent: {
      marginBottom: theme.spacing(1),
    },
    labelIcon: {
      marginRight: theme.spacing(1),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
    },
  })
);

const TASK_STATE = ["TODO", "進行中", "完了"];
const TASK_PRIORITY = ["低", "中", "高"];

interface TaskFormProps {
  taskData: {
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
  };
  projects: { id: string; name: string }[];
  members?: {
    active: boolean;
    email: string;
    name: string;
    registration: boolean;
    role: string;
    id: string;
  }[];
  update?: boolean;
  submitFunction: (
    value: {
      task: {
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
      };
      log: {
        user?: string;
        name?: string;
        description?: string;
        startDateAt?: string;
        endDateAt?: string;
        state?: number;
        progress?: number;
        priority?: number;
        project?: string | null;
        todaysTask?: boolean;
      };
    },
    workspace: string
  ) => Promise<void>;
}

const TaskForm: FC<TaskFormProps> = ({
  projects,
  submitFunction,
  taskData,
  update,
  members,
}) => {
  const classes = useStyles();
  const workspace = workspacePathId
  const project = useSelector(selectProject);

  const selectedMembers = useSelector(selectSelectedMembers);

  const taskMembers = members && members.length > 0 ? members : selectedMembers;

  if (!taskData.startDateAt) {
    taskData.startDateAt = moment().toString();
  }
  if (!taskData.endDateAt) {
    taskData.endDateAt = moment().add(1, "days").toString();
  }

  if (!taskData.todaysTask) {
    taskData.todaysTask = false;
  }

  if (!taskData.project) {
    if (project.id) {
      taskData.project = project.id;
    } else {
      taskData.project = "";
    }
  }

  const dispatch = useDispatch();

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
    [key: string]: string | number | boolean | null;
  }

  const initialValues: TaskFormValues = {
    user: taskData.user,
    name: taskData.name,
    description: taskData.description,
    startDateAt: taskData.startDateAt,
    endDateAt: taskData.endDateAt,
    state: taskData.state,
    progress: taskData.progress,
    priority: taskData.priority,
    project: taskData.project || "",
    todaysTask: taskData.todaysTask,
  };

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          user: Yup.string().required("担当者を選択してください"),
          name: Yup.string()
            .max(24, "24文字以内で入力してください")
            .required("タスク名は必須です。"),
        })}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(false);
          dispatch(toggleLoading(true));
          //変更箇所、内容の取得
          const diff = _.omitBy(
            values,
            (value, key) => initialValues[key] === value
          );

          let submitData = {
            task: { ...values },
            log: diff,
          };
          if (!submitData.task.project) {
            submitData.task.project = null;
          }

          await submitFunction(submitData, workspace);
          dispatch(toggleLoading(false));
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
                  value={props.values.name}
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
            <Field
              component={CheckboxWithLabel}
              type="checkbox"
              name="todaysTask"
              Label={{ label: "今日やる" }}
              checked={props.values.todaysTask}
            />
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
                    component={TextField}
                    name="user"
                    id="user"
                    defaultValue={props.values.user}
                    select
                    onChange={props.handleChange("user")}
                    inputProps={{
                      id: "user",
                    }}
                  >
                    <MenuItem value="">
                      <em>未選択</em>
                    </MenuItem>
                    {taskMembers &&
                      taskMembers.map((user, index) => {
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
                  <InputLabel htmlFor="project">プロジェクト選択</InputLabel>
                  <Field
                    component={Select}
                    disabled={update}
                    name="project"
                    id="project"
                    as="select"
                    defaultValue={props.values.project}
                    inputProps={{
                      id: "project",
                    }}
                  >
                    <MenuItem value="">未選択</MenuItem>
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
                    defaultValue={props.values.state}
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
                    defaultValue={props.values.priority}
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
                    value={props.values.progress}
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
                    variant="outlined"
                    margin="none"
                    fullWidth
                    multiline
                    id="description"
                    value={props.values.description}
                    rows={3}
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
