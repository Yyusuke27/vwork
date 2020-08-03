import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Typography from "@material-ui/core/Typography";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";

interface TaskInTaikinItemProps {
  title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
      borderRadius: 10,
      height: 80,
      marginBottom: 15,
      cursor: "pointer",
    },
  })
);

const TaskInTaikinItem: FC<TaskInTaikinItemProps> = ({ title = "" }) => {
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
                <Typography style={{ fontSize: 22 }}>{title}</Typography>
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
                <Typography>プロジェクト</Typography>
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

export default TaskInTaikinItem;
