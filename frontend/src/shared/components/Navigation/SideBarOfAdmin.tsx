import React, { FC } from "react";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import Drawer from "@material-ui/core/Drawer";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Color from "../../util/color";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      color: Color.VWORK_BLACK,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: Color.VWORK_DARK_BLUE,
      color: Color.VWORK_WHITE,
    },
    title: {
      fontWeight: 900,
      fontSize: 30,
    },
    img: {
      height: 25,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    menuIcon: {
      fontSize: 40,
      color: Color.VWORK_WHITE,
    },
    icon: {
      color: Color.VWORK_WHITE,
    },
  })
);

interface SideBarOfAdminProps {
  handleDrawerClose: () => void;
  open: boolean;
}

const SideBarOfAdmin: FC<SideBarOfAdminProps> = ({
  handleDrawerClose,
  open,
}) => {
  const classes = useStyles();

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
                justify="center"
                alignItems="center"
                className={classes.title}
                style={{ marginLeft: "10%" }}
              >
                <Grid item>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo192.png`}
                    className={classes.img}
                    alt="アイコン"
                  />
                </Grid>
                <Grid item>VWORK</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  <MenuIcon className={classes.menuIcon} />
                </IconButton>
              </div>
            </Grid>
          </Grid>
          <List>
            <ListItem button component={NavLink} to="/" exact>
              <ListItemIcon className={classes.icon}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="ホーム" />
            </ListItem>
            <ListItem button component={NavLink} to="/my_task" exact>
              <ListItemIcon className={classes.icon}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="ワークスペース" />
            </ListItem>
            <ListItem button component={NavLink} to="/work_manage" exact>
              <ListItemIcon className={classes.icon}>
                <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </List>
        </Drawer>
      </Container>
    </div>
  );
};

export default SideBarOfAdmin;
