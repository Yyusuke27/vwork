import React, { useContext } from "react";
// import Logo from "../../../../public/images/auth/logo192.png";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import MessageIcon from "@material-ui/icons/Message";
import Drawer from "@material-ui/core/Drawer";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import MyProject from "../../../Dashboard/Project/pages/MyProject";
import Container from "@material-ui/core/Container";
import Color from "../../util/color";
import AppContext from "../../../AppContext";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      color: Color.VWORK_BLACK,
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: Color.VWORK_BLACK,
      color: Color.VWORK_WHITE,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    iconstyle: {
      color: Color.VWORK_WHITE,
    },
    title: {
      fontWeight: 900,
    },
  })
);

const SideBar = () => {
  const classes = useStyles();
  // @ts-ignore
  const { handleDrawerClose, open } = useContext(AppContext);

  return (
    <div className={classes.root}>
      <Container>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Grid
                container
                direction="row"
                alignItems="center"
                className={classes.title}
              >
                <Grid item>{/*<img src={Logo} alt="logo" />*/}</Grid>
                <Grid item>VWORK</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  <MenuIcon style={{ fontSize: 40, color: Color.VWORK_GRAY }} />
                </IconButton>
              </div>
            </Grid>
          </Grid>
          <List>
            <ListItem button component={NavLink} to="/" exact>
              <ListItemIcon className={classes.iconstyle}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="ホーム" />
            </ListItem>
            <ListItem button component={NavLink} to="/my_task" exact>
              <ListItemIcon className={classes.iconstyle}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="マイタスク" />
            </ListItem>
            <ListItem button component={NavLink} to="/kintai_manage" exact>
              <ListItemIcon className={classes.iconstyle}>
                <QueryBuilderIcon />
              </ListItemIcon>
              <ListItemText primary="勤怠管理" />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={classes.iconstyle}>
                <MessageIcon />
              </ListItemIcon>
              <ListItemText primary="フィードバック" />
            </ListItem>
          </List>
          <MyProject />
        </Drawer>
      </Container>
    </div>
  );
};

export default SideBar;
