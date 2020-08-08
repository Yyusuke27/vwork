import React from "react";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Color from "../../../shared/util/color";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Backdrop from "@material-ui/core/Backdrop";
import TaskList from "../../Task/components/TaskList";

const drawerWidth = "55%";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainTitle: {
      width: "30%",
      fontSize: 23,
    },
    root: {
      borderRadius: 10,
      backgroundColor: Color.VWORK_LIGHT_BLUE,
      marginTop: 25,
    },
    title: {
      fontSize: 18,
    },
    timeArea: {
      width: "40%",
      fontSize: 18,
      marginTop: "1%",
    },
    appBar: {
      position: "relative",
      backgroundColor: Color.VWORK_BLACK,
    },
    dialogTitle: {
      fontSize: 30,
    },
    dialogText: {
      fontSize: 20,
    },
    dialogStyle: {
      marginTop: "5%",
    },
    additionalButton: {
      borderRadius: 10,
      width: "10%",
      fontSize: 20,
    },
    addedTask: {
      marginTop: "3%",
      fontSize: 30,
      cursor: "pointer",
    },
    textFieldArea: {
      marginTop: "10%",
    },
    todayUpdate: {
      marginBottom: "1%",
    },
    textField: {
      width: "85%",
    },
    out: {
      borderRadius: 10,
      width: 150,
      fontSize: 20,
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
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CheckAttendanceArea = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const [drawer, setDrawer] = React.useState(false);

  const drawerClose = () => {
    setDrawer(false);
  };
  const drawerOpen = () => {
    setDrawer(true);
  };

  return (
    <>
      <Box borderBottom={1} className={classes.mainTitle}>
        勤怠管理
      </Box>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            2020年8月10日
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            className={classes.timeArea}
          >
            <Grid item>出社：</Grid>
            <Grid item>休憩：</Grid>
            <Grid item>退社：</Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container direction="row" justify="flex-end">
            <Grid item style={{ marginRight: "1%" }}>
              <Button size="small" variant="contained" color="primary">
                出社
              </Button>
            </Grid>
            <Grid item style={{ marginRight: "1%" }}>
              <Button size="small" variant="contained">
                休憩
              </Button>
            </Grid>
            <Grid item style={{ marginRight: "1%" }}>
              <Button
                size="small"
                variant="contained"
                onClick={handleClickOpen}
              >
                退社
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo192.png`}
              style={{ height: 25 }}
              alt="icon"
            />
            <Typography variant="h6" className={classes.dialogTitle}>
              VWORK
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid
          container
          direction="column"
          className={clsx(classes.dialogText, classes.dialogStyle)}
        >
          <Container maxWidth="lg">
            <Grid item>勤務お疲れさまでした</Grid>
            <Grid item style={{ marginTop: "5%" }}>
              <Grid container direction="column">
                <Grid item>今日行ったタスクの確認をして下さい。</Grid>
                <Grid item style={{ marginTop: "1%" }}>
                  <Button
                    className={classes.additionalButton}
                    onClick={handleDrawerOpen}
                    variant="contained"
                    color="secondary"
                  >
                    追加
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.addedTask} onClick={drawerOpen}>
              X件のタスクを追加済
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                className={classes.textFieldArea}
              >
                <Grid item className={classes.todayUpdate}>
                  今日の振り返り
                </Grid>
                <Grid item>
                  <TextField
                    multiline
                    rows={8}
                    variant="outlined"
                    className={classes.textField}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="flex-end"
                style={{ marginTop: "10%" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.out}
                >
                  退勤する
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Backdrop className={classes.backdrop} open={openDrawer}>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={openDrawer}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Container maxWidth="md">
              <Grid container direction="column">
                <Grid item>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleDrawerClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <TaskList title="タスク" />
                </Grid>
              </Grid>
            </Container>
          </Drawer>
        </Backdrop>
        <Backdrop className={classes.backdrop} open={drawer}>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Container maxWidth="md">
              <Grid container direction="column">
                <Grid item>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={drawerClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <TaskList title="今日行ったタスク" />
                </Grid>
              </Grid>
            </Container>
          </Drawer>
        </Backdrop>
      </Dialog>
    </>
  );
};

export default CheckAttendanceArea;
