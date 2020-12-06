import React, { FC } from "react";
import AttendanceTaskItem from "./AttendanceTaskItem";
import Box from "@material-ui/core/Box";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 23,
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  })
)(InputBase);

interface AttendanceTaskListProps {
  title?: string;
  iconType?: string;
  taskData?: {
    name: string;
    description: string;
    startDateAt: string;
    endDateAt: string;
    state: number;
    progress: number;
    priority: number;
    id: string;
  }[];
}

const AttendanceTaskList: FC<AttendanceTaskListProps> = ({
  title = "",
  iconType = "",
  taskData,
}) => {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setText(event.target.value as string);
  };

  const tasks: {
    name: string;
    description: string;
    startDateAt: string;
    endDateAt: string;
    state: number;
    progress: number;
    priority: number;
    id: string;
  }[] = taskData
    ? taskData
    : [
        {
          name: "",
          description: "",
          startDateAt: "",
          endDateAt: "",
          state: 0,
          progress: 0,
          priority: 0,
          id: ""
        },
      ];

  return (
    <>
      <Box mt={7}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={5}>
            {title ? (
              <Box borderBottom={1} className={classes.title}>
                {title}
              </Box>
            ) : (
              ""
            )}
          </Grid>
          <Grid item>
            {title === "タスク" ? (
              <FormControl className={classes.margin}>
                <Select
                  value={text}
                  onChange={handleChange}
                  input={<BootstrapInput />}
                  style={{ width: 200 }}
                >
                  <MenuItem value="">未選択</MenuItem>
                  <MenuItem value="0">TODO</MenuItem>
                  <MenuItem value="1">進行中</MenuItem>
                  <MenuItem value="2">完了</MenuItem>
                </Select>
              </FormControl>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
        <Box mt={2}>
          <Grid container direction="column" justify="flex-start">
            {tasks.map((data, index) => {
              return <AttendanceTaskItem data={data} key={index} />;
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default AttendanceTaskList;
