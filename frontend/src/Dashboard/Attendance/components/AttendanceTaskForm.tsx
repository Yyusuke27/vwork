import React, { FC } from "react";
import { Field, Form, Formik } from "formik";
import moment from "moment";
import DateFnsUtils from "@date-io/date-fns";
import { ja } from "date-fns/locale";
import { TextField, Select } from "formik-material-ui";
import { Box, Slider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "formik-material-ui-pickers";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FlagIcon from "@material-ui/icons/Flag";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightIcon from "@material-ui/icons/Highlight";
import SubjectIcon from "@material-ui/icons/Subject";

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

interface AttendanceTaskFormProps {
  taskData: {
    id: string;
    name: string;
    description: string;
    startDateAt: string;
    endDateAt: string;
    state: number;
    progress: number;
    priority: number;
  };
}

const AttendanceTaskForm: FC<AttendanceTaskFormProps> = ({
  taskData,
}) => {
  const classes = useStyles();

  if (!taskData.startDateAt) {
    taskData.startDateAt = moment().toString();
  }
  if (!taskData.endDateAt) {
    taskData.endDateAt = moment().add(1, "days").toString();
  }

  interface TaskFormValues {
    name: string;
    description: string;
    startDateAt: string;
    endDateAt: string;
    state: number;
    progress: number;
    priority: number;
    [key: string]: string | number | boolean | null;
  }

  const initialValues: TaskFormValues = {
    name: taskData.name,
    description: taskData.description,
    startDateAt: taskData.startDateAt,
    endDateAt: taskData.endDateAt,
    state: taskData.state,
    progress: taskData.progress,
    priority: taskData.priority,
  };

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={async (values, actions) => {}}
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
                  disabled
                  id="name"
                  value={props.values.name}
                />
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
                          disabled
                          value={props.values.startDateAt}
                        />
                      </Grid>
                      <Grid item>
                        <Field
                          component={DatePicker}
                          name="endDateAt"
                          label="終了"
                          id="endDateAt"
                          disabled
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
                    disabled
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
                    disabled
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
                    disabled
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
                    disabled
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

export default AttendanceTaskForm;
