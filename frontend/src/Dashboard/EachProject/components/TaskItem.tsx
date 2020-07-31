import React, { FC } from "react";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  root: {
    width: 850,
    borderRadius: 10,
    height: 80,
    marginBottom: 15,
  },

  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

interface TaskItemProps {
  title: string;
  project: string;
  data: string;
}

const TaskItem: FC<TaskItemProps> = ({
  title = "",
  project = "",
  data = "",
}) => {
  const classes = useStyles();

  return (
    <>
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
              justify="space-between"
              alignItems="center"
              style={{ width: 220, paddingLeft: 10 }}
            >
              <Grid item>
                <CheckCircleIcon />
              </Grid>
              <Grid item>
                <Typography className={classes.title}>{title}</Typography>
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
                <Typography>{project}</Typography>
              </Grid>
              <Grid item>
                <AccessTimeIcon />
              </Grid>
              <Grid item>
                <Typography>{data}</Typography>
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

export default TaskItem;
