import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { makeStyles } from "@material-ui/core/styles";
import Color from "../../../shared/util/color";
import TaskItem from "./TaskItem";
import Grid from "@material-ui/core/Grid";

const defaultProps = {
  m: 1,
  style: { width: "20rem" },
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 10,
    height: 80,
  },

  title: {
    fontSize: 18,
  },
});

const taskData = [
  { title: "管理画面のUI見直し", project: "プロジェクト名", data: "日付" },
  { title: "管理画面のUI見直し", project: "プロジェクト名", data: "日付" },
  { title: "管理画面のUI見直し", project: "プロジェクト名", data: "日付" },
  { title: "管理画面のUI見直し", project: "プロジェクト名", data: "日付" },
];

const TaskList = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        borderBottom={1}
        {...defaultProps}
        className={classes.title}
        mt={10}
        mb={3}
      >
        期限が近いタスク
      </Box>
      <Grid container direction="column" justify="flex-start">
        {taskData.map((data) => {
          return (
            <TaskItem
              title={data.title}
              project={data.project}
              data={data.data}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default TaskList;
