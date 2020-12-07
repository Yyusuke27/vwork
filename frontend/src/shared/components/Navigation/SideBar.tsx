import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Color from "../../util/color";
import MyProject from "../../../Dashboard/Project/components/MyProject";
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
import GroupIcon from "@material-ui/icons/Group";
import WorkIcon from "@material-ui/icons/Work";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SettingsIcon from "@material-ui/icons/Settings";
import Drawer from "@material-ui/core/Drawer";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import { selectOpenMenu, toggleOpenMenu } from "../../../appSlice";
import {
  selectIsWorkspaceOwner,
  selectUnreadNotification,
  selectWorkspaceName,
} from "../../../Auth/authSlice";
import { workspacePathId } from "../../util/workspacePathId"

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
      backgroundColor: Color.VWORK_BLACK,
      color: Color.VWORK_WHITE,
    },
    title: {
      fontWeight: 900,
      cursor: "pointer",
    },
    mainTitle: {
      fontSize: 30,
      paddingLeft: "5px",
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
      color: Color.VWORK_GRAY,
    },
    icon: {
      color: Color.VWORK_WHITE,
    },
  })
);

const SideBar = () => {
  const classes = useStyles();

  const history = useHistory();
  const pageChangeHandler = () => {
    history.push("/");
  };

  const dispatch = useDispatch();
  const openMenu = useSelector(selectOpenMenu);

  const unreadNotifications = useSelector(selectUnreadNotification);

  const workspaceName = useSelector(selectWorkspaceName);

  const isWorkspaceOwner = useSelector(selectIsWorkspaceOwner);

  return (
    <div className={classes.root}>
      <Container>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={openMenu}
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
            <Grid item onClick={pageChangeHandler}>
              <Box ml={2}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  className={classes.title}
                >
                  <Grid item>
                    <Box display="flex">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/logo192.png`}
                        style={{ height: 25 }}
                        className="imgstyle"
                        alt="icon"
                      />
                    </Box>
                  </Grid>
                  <Grid item className={clsx(classes.mainTitle, "logo")}>
                    VWORK
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item>
              <div className={classes.drawerHeader}>
                <IconButton onClick={() => dispatch(toggleOpenMenu(false))}>
                  <MenuIcon className={classes.menuIcon} />
                </IconButton>
              </div>
            </Grid>
          </Grid>
          <Box m={2} mb={0} borderBottom={1} fontWeight="fontWeightBold">
            <Typography>{workspaceName.name}</Typography>
          </Box>
          <List>
            <ListItem button component={NavLink} to={`/${workspacePathId}`} exact>
              <ListItemIcon className={classes.icon}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="ホーム" />
            </ListItem>
            <ListItem button component={NavLink} to={`/${workspacePathId}/my_task`} exact>
              <ListItemIcon className={classes.icon}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="マイタスク" />
            </ListItem>
            <ListItem button component={NavLink} to={`/${workspacePathId}/work_manage`} exact>
              <ListItemIcon className={classes.icon}>
                <QueryBuilderIcon />
              </ListItemIcon>
              <ListItemText primary="勤怠管理" />
            </ListItem>
            <ListItem button component={NavLink} to={`/${workspacePathId}/notification`} exact>
              <ListItemIcon className={classes.icon}>
                <NotificationsNoneIcon />
              </ListItemIcon>
              <Badge badgeContent={unreadNotifications} color="primary">
                <ListItemText primary="受信ボックス" />
              </Badge>
            </ListItem>
            {isWorkspaceOwner ? (
              <>
                <ListItem button component={NavLink} to={`/${workspacePathId}/members`} exact>
                  <ListItemIcon className={classes.icon}>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText primary="メンバー管理" />
                </ListItem>
                <ListItem button component={NavLink} to={`/${workspacePathId}/project_manage`} exact>
                  <ListItemIcon className={classes.icon}>
                    <WorkIcon />
                  </ListItemIcon>
                  <ListItemText primary="プロジェクト管理" />
                </ListItem>
                <ListItem
                  button
                  component={NavLink}
                  to={`/${workspacePathId}/workspace_manage`}
                  exact
                >
                  <ListItemIcon className={classes.icon}>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="ワークスペース管理" />
                </ListItem>
              </>
            ) : (
              ""
            )}
          </List>
          <MyProject />
        </Drawer>
      </Container>
    </div>
  );
};

export default SideBar;
