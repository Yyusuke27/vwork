import React, { FC } from "react";

import TaskItem from "./TaskItem";

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

interface TaskListProps {
  title?: string;
  iconType?: string;
  taskData?: {
    name: string;
    project: { _id: string; name: string };
    endDateAt: string;
    _id: string;
    user: { _id: string; name: string };
  }[];
}

const TaskList: FC<TaskListProps> = ({
  title = "",
  iconType = "",
  taskData,
}) => {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setText(event.target.value as string);
  };

  // TODO:　全てのTaskListを使っているところとAPIを連携させたらここを削除
  const tasks: {
    name: string;
    project: { _id: string; name: string };
    endDateAt: string;
    _id: string;
    user: { _id: string; name: string };
  }[] = taskData
    ? taskData
    : [
        {
          name: "タスク",
          project: { name: "プロジェクト", _id: "12345" },
          endDateAt: "2020-10-10",
          _id: "12345",
          user: { name: "太郎", _id: "12345" },
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
          <Grid item style={{ width: "35%" }}>
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
              return <TaskItem data={data} iconType={iconType} key={index} />;
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default TaskList;
