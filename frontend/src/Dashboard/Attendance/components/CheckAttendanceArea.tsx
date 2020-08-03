import React from "react";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Color from "../../../shared/util/color";
import Dialog from "@material-ui/core/Dialog";
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
import TaskInTaikinList from "../../Task/components/TaskInTaikinList";

const drawerWidth = "55%";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 10,
      backgroundColor: Color.VWORK_LIGHT_BLUE,
      height: 185,
      marginTop: 25,
    },

    title: {
      fontSize: 18,
    },
    maintitle: {
      m: 1,
      width: "20rem",
      fontSize: 18,
    },
    color: {
      backgroundColor: Color.VWORK_RED,
    },
    button: {
      cursor: "pointer",
    },
    appBar: {
      position: "relative",
      backgroundColor: Color.VWORK_WHITE,
    },
    dialogText: {
      fontSize: 20,
    },
    dialogStyle: {
      marginTop: "5%",
    },
    additionalButton: {
      backgroundColor: Color.VWORK_BLUE,
      color: Color.VWORK_WHITE,
      borderRadius: 10,
      width: 100,
      fontSize: 20,
    },
    takinButton: {
      backgroundColor: Color.VWORK_RED,
      color: Color.VWORK_WHITE,
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

  return (
    <>
      <Box borderBottom={1} className={classes.maintitle}>
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
          <Box
            display="flex"
            flexDirection="row"
            p={1}
            m={1}
            className={classes.title}
          >
            <Box p={0} mr={15}>
              出社：
            </Box>
            <Box p={0} mr={15}>
              休憩：
            </Box>
            <Box p={0} mr={15}>
              退社：
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Box
            display="flex"
            justifyContent="flex-end"
            m={1}
            p={1}
            style={{ width: "100%" }}
          >
            <Box p={1}>
              <Button
                size="small"
                variant="contained"
                className={classes.color}
              >
                出社
              </Button>
            </Box>
            <Box p={1}>
              <Button size="small" variant="contained">
                休憩
              </Button>
            </Box>
            <Box p={1}>
              <Button
                size="small"
                variant="contained"
                onClick={handleClickOpen}
                className={classes.button}
              >
                退社
              </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <Grid
          container
          direction="column"
          className={clsx(classes.dialogText, classes.dialogStyle)}
        >
          <Container maxWidth="md">
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item>勤務お疲れさまでした</Grid>
            <Grid item style={{ marginTop: "5%" }}>
              <Grid container direction="column">
                <Grid item>今日行ったタスクの確認をして下さい。</Grid>
                <Grid item style={{ marginTop: "1%" }}>
                  <Button
                    className={classes.additionalButton}
                    onClick={handleDrawerOpen}
                  >
                    追加
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "3%", fontSize: 30 }}>
              X件のタスクを追加済
            </Grid>
            <Grid item>
              <Grid container direction="column" style={{ marginTop: "10%" }}>
                <Grid item style={{ marginBottom: "1%" }}>
                  今日の振り返り
                </Grid>
                <Grid item>
                  <TextField
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{ width: 800 }}
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
                <Button className={classes.takinButton}>退勤する</Button>
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
                <TaskInTaikinList />
              </Grid>
            </Grid>
          </Drawer>
        </Backdrop>
      </Dialog>
    </>
  );
};

export default CheckAttendanceArea;
