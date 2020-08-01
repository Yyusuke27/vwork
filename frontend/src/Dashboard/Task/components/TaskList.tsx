import React, { FC } from "react";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";

import TaskItem from "./TaskItem";
import Grid from "@material-ui/core/Grid";

const defaultProps = {
  m: 1,
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
];

interface TaskListProps {
  title?: string;
  iconType?: string;
}

const TaskList: FC<TaskListProps> = ({ title = "", iconType = "" }) => {
  const classes = useStyles();

  return (
    <>
      {title ? (
        <Box
          borderBottom={1}
          {...defaultProps}
          className={classes.title}
          mt={10}
          mb={3}
        >
          {title}
        </Box>
      ) : (
        ""
      )}
      <Grid container direction="column" justify="flex-start">
        {taskData.map((data) => {
          return (
            <TaskItem
              title={data.title}
              project={data.project}
              data={data.data}
              iconType={iconType}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default TaskList;
