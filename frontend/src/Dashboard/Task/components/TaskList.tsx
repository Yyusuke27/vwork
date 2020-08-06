import React, { FC } from "react";
import Box from "@material-ui/core/Box";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import TaskItem from "./TaskItem";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
      borderRadius: 10,
      height: 80,
    },

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

const taskData = [
  { title: "管理画面のUI見直し", project: "プロジェクト名", data: "日付" },
];

interface TaskListProps {
  title?: string;
  iconType?: string;
}

const TaskList: FC<TaskListProps> = ({ title = "", iconType = "" }) => {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setText(event.target.value as string);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ marginTop: "5%" }}
      >
        <Grid item style={{ width: "30%" }}>
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
              <NativeSelect
                value={text}
                onChange={handleChange}
                input={<BootstrapInput />}
                style={{ width: 200 }}
              >
                <option value={"未完了のタスク"}>未完了のタスク</option>
                <option value={"未完了のタスク"}>未完了のタスク</option>
                <option value={"未完了のタスク"}>未完了のタスク</option>
              </NativeSelect>
            </FormControl>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="flex-start"
        style={{ marginTop: "2%" }}
      >
        {taskData.map((data, index) => {
          return (
            <TaskItem
              title={data.title}
              project={data.project}
              data={data.data}
              iconType={iconType}
              key={index}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default TaskList;
