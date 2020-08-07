import React, { FC, useContext, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Color from "../../../shared/util/color";
import Grid from "@material-ui/core/Grid";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import AppContext from "../../../AppContext";
import Menu from "@material-ui/core/Menu";
import Backdrop from "@material-ui/core/Backdrop";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";

const drawerWidth = 240;
const DrawerWith = "50%";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    drawer: {
      width: DrawerWith,
      flexShrink: 0,
    },
    drawerPaper: {
      width: DrawerWith,
    },
  })
);

interface MainHeaderProps {
  title: string;
}

const MainHeader: FC<MainHeaderProps> = ({ title = "" }) => {
  const classes = useStyles();
  // @ts-ignore
  const { handleDrawerOpen, open, OpenTask, CloseTask, openTask } = useContext(
    AppContext
  );
  const [menu, setMenu] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenu(event.currentTarget);
  };
  const handleClose = () => {
    setMenu(null);
  };

  const [openProject, setOpenProject] = useState(false);
  const OpenProject = () => {
    setOpenProject(true);
  };
  const CloseProject = () => {
    setOpenProject(false);
  };

  const [openMember, setOpenMember] = useState(false);
  const OpenMember = () => {
    setOpenMember(true);
  };
  const CloseMember = () => {
    setOpenMember(false);
  };

  const [AvaterMenu, setAvaterMenu] = React.useState<null | HTMLElement>(null);

  const HandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAvaterMenu(event.currentTarget);
  };

  const HandleClose = () => {
    setAvaterMenu(null);
  };

  const [openProfile, setOpenProfile] = useState(false);
  const OpenProfile = () => {
    setOpenProfile(true);
  };
  const CloseProfile = () => {
    setOpenProfile(false);
  };

  return (
    <div className={classes.root}>
      <Container>
        <AppBar
          style={{ backgroundColor: Color.VWORK_WHITE }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon style={{ fontSize: 40, color: Color.VWORK_GRAY }} />
            </IconButton>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography
                  variant="h6"
                  style={{ color: Color.VWORK_GRAY }}
                  noWrap
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Grid item>
                    <IconButton aria-label="add" onClick={handleClick}>
                      <AddCircleOutlineIcon style={{ fontSize: 40 }} />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={HandleClick}>
                      <Avatar
                        alt="Shogo Yunoki"
                        src="/static/images/avatar/1.jpg"
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Container>
      <Menu id="simple-menu" anchorEl={menu} keepMounted open={Boolean(menu)}>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <Backdrop
          className={classes.backdrop}
          open={openTask}
          onClick={CloseTask}
        >
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={openTask}
            classes={{
              paper: classes.drawerPaper,
            }}
          ></Drawer>
        </Backdrop>
        <MenuItem onClick={OpenTask}>タスク追加</MenuItem>
        <Backdrop
          className={classes.backdrop}
          open={openProject}
          onClick={CloseProject}
        >
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={openProject}
            classes={{
              paper: classes.drawerPaper,
            }}
          ></Drawer>
        </Backdrop>
        <MenuItem onClick={OpenProject}>プロジェクト追加</MenuItem>
        <Backdrop
          className={classes.backdrop}
          open={openMember}
          onClick={CloseMember}
        >
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={openMember}
            classes={{
              paper: classes.drawerPaper,
            }}
          ></Drawer>
        </Backdrop>
        <MenuItem onClick={OpenMember}>メンバー招待</MenuItem>
      </Menu>
      <Menu
        id="simple-menu"
        anchorEl={AvaterMenu}
        keepMounted
        open={Boolean(AvaterMenu)}
      >
        <IconButton onClick={HandleClose}>
          <CloseIcon />
        </IconButton>
        <Backdrop
          className={classes.backdrop}
          open={openProfile}
          onClick={CloseProfile}
        >
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={openProfile}
            classes={{
              paper: classes.drawerPaper,
            }}
          ></Drawer>
        </Backdrop>
        <MenuItem onClick={OpenProfile}>プロフィール設定</MenuItem>
        <MenuItem>他のworkspace</MenuItem>
        <MenuItem>ログアウト</MenuItem>
      </Menu>
    </div>
  );
};

export default MainHeader;
