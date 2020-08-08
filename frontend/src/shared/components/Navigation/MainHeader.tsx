import React, { FC, useContext, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
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
import Menu, { MenuProps } from "@material-ui/core/Menu";
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
      boxShadow: "none",
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
      marginRight: "2%",
    },
    hide: {
      display: "none",
    },
    menuIcon: {
      fontSize: 40,
      color: Color.VWORK_GRAY,
    },
    title: {
      color: Color.VWORK_GRAY,
    },
    addIcon: {
      fontSize: 40,
    },
    icon: {
      paddingLeft: 0,
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

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: Color.VWORK_WHITE,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: Color.VWORK_WHITE,
      },
    },
  },
}))(MenuItem);

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

  // const [openWorkSpace, setOpenworkSpace] = useState(false);
  // const OpenWorkSpace = () => {
  //   setOpenProfile(true);
  // };
  // const CloseWorkSpace = () => {
  //   setOpenProfile(false);
  // };

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
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h6" className={classes.title} noWrap>
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
                      <AddCircleOutlineIcon className={classes.addIcon} />
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
      <StyledMenu
        id="customized-menu"
        anchorEl={menu}
        keepMounted
        open={Boolean(menu)}
      >
        <StyledMenuItem>
          <CloseIcon onClick={handleClose} className={classes.icon} />
        </StyledMenuItem>
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
        <StyledMenuItem onClick={OpenTask}>タスク追加</StyledMenuItem>
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
        <StyledMenuItem onClick={OpenProject}>プロジェクト追加</StyledMenuItem>
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
        <StyledMenuItem onClick={OpenMember}>メンバー招待</StyledMenuItem>
      </StyledMenu>
      <StyledMenu
        id="customized-menu"
        anchorEl={AvaterMenu}
        keepMounted
        open={Boolean(AvaterMenu)}
      >
        <StyledMenuItem>
          <CloseIcon onClick={HandleClose} className={classes.icon} />
        </StyledMenuItem>
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
        <StyledMenuItem onClick={OpenProfile}>プロフィール設定</StyledMenuItem>
        <StyledMenuItem>他のworkspace</StyledMenuItem>
        <StyledMenuItem>ログアウト</StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default MainHeader;
