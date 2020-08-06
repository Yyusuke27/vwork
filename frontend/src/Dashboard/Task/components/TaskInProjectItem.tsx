import React, { FC } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  root: {
    borderRadius: 10,
    height: 100,
    marginTop: 25,
  },

  title: {
    fontSize: 20,
    marginTop: 40,
  },
  content: {
    fontSize: 20,
  },
});

interface TaskInProjectItemProps {
  title: string;
}

const TaskInProjectItem: FC<TaskInProjectItemProps> = ({ title = "" }) => {
  const classes = useStyles();

  return (
    <>
      <Box borderBottom={1} className={classes.title}>
        プロジェクト内担当タスク
      </Box>
      <Card className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ height: 80, margin: "auto" }}
        >
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              style={{ width: 220, paddingLeft: 10 }}
            >
              <Grid item style={{ marginRight: 10 }}>
                <CheckCircleIcon />
              </Grid>
              <Grid item>
                <Typography className={classes.content}>{title}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{ width: 280, paddingRight: 10 }}
            >
              <Grid item>
                <Typography>プログ</Typography>
              </Grid>
              <Grid item>
                <AccessTimeIcon />
              </Grid>
              <Grid item>
                <Typography>日付</Typography>
              </Grid>
              <Grid item>
                <Avatar>S</Avatar>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default TaskInProjectItem;
