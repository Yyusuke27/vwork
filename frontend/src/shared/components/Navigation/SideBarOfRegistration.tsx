import React from "react";
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
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Drawer from "@material-ui/core/Drawer";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import MyProject from "../../../Dashboard/Project/pages/MyProject";
import Container from "@material-ui/core/Container";
import Color from "../../util/color";

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

const SideBarOfRegistration = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
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
                justify="center"
                alignItems="center"
                className={classes.title}
                style={{ marginLeft: "10%" }}
              >
                <Grid item style={{ fontSize: 30 }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo192.png`}
                    style={{ height: 25 }}
                    alt=""
                  />
                </Grid>
                <Grid item style={{ fontSize: 30 }}>
                  VWORK
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <div className={classes.drawerHeader}>
                <IconButton>
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
                <NotificationsNoneIcon />
              </ListItemIcon>
              <ListItemText primary="受信ボックス" />
            </ListItem>
          </List>
          <MyProject />
        </Drawer>
      </Container>
    </div>
  );
};

export default SideBarOfRegistration;
