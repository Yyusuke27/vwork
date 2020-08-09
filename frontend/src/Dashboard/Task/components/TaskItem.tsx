import React, { FC, useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Color from "../../../shared/util/color";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = "55%";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      borderRadius: 10,
      height: 80,
      marginBottom: 15,
      cursor: "pointer",
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
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
  })
);

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
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={handleDrawerOpen}>
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
        </CardActionArea>
      </Card>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        ></Drawer>
      </Backdrop>
    </>
  );
};

export default TaskItem;
