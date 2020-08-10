import React, { FC, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Typography from "@material-ui/core/Typography";
import Backdrop from "@material-ui/core/Backdrop";
import Drawer from "@material-ui/core/Drawer";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Color from "../../../shared/util/color";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";

const drawerWidth = "55%";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
      borderRadius: 10,
      height: 80,
      marginBottom: 15,
      cursor: "pointer",
      width: "100%",
    },

    title: {
      fontSize: 20,
    },
    projectName: {
      color: Color.VWORK_BLUE,
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
  })
);

interface TaskInDetailItemProps {
  title: string;
}

const TaskInDetailItem: FC<TaskInDetailItemProps> = ({ title = "" }) => {
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
      <Grid container direction="column">
        <Grid item>
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
                    alignItems="center"
                    style={{ width: 200 }}
                  >
                    <Box ml={1} mr={2}>
                      <Grid item>
                        <CheckCircleIcon />
                      </Grid>
                    </Box>
                    <Grid item>
                      <Typography className={classes.title}>{title}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Box mr={3}>
                  <Grid item className={classes.projectName}>
                    <Typography>プロジェクト名</Typography>
                  </Grid>
                </Box>
              </Grid>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Grid container direction="column" justify="flex-start">
            <Box mt={5}>
              <Grid item>
                <Grid container direction="row">
                  <Box mr={2}>
                    <Grid item>
                      <ChatBubbleIcon />
                    </Grid>
                  </Box>
                  <Grid item className={classes.title}>
                    振り返り
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box mt={1}>
              <Grid item>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
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

export default TaskInDetailItem;
