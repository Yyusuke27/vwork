import React, { FC } from "react";

import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Color from "../../../shared/util/color";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
  color: {
    color: Color.VWORK_RED,
  },
});

interface TaskItemProps {
  title: string;
  project: string;
  data: string;
  iconType?: string;
}

const TaskItem: FC<TaskItemProps> = ({
  title = "",
  project = "",
  data = "",
  iconType = "",
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
                {iconType === "alert" ? (
                  <ErrorOutlineIcon className={classes.color} />
                ) : (
                  <CheckCircleIcon />
                )}
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
