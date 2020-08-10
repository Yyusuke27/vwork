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
import AppContext from "../../../AppContext";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

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
      fontSize: 45,
    },
    icon: {
      paddingLeft: 0,
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
      horizontal: "left",
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
  const {
    open,
    handleDrawerOpen,
    handleClick,
    HandleClick,
    handleClose,
    menu,
    OpenTask,
    OpenProject,
    OpenMember,
    AvatarMenu,
    HandleClose,
    OpenProfile,
  } = useContext(AppContext);

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
              className={clsx(open && classes.hide)}
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
                    <IconButton
                      aria-label="add"
                      onClick={handleClick}
                      style={{ padding: 0, paddingRight: 10 }}
                    >
                      <AddCircleOutlineIcon className={classes.addIcon} />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      onClick={HandleClick}
                      style={{ padding: 0, paddingRight: 10 }}
                    >
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
        onClick={handleClose}
      >
        <StyledMenuItem onClick={OpenTask}>タスク追加</StyledMenuItem>

        <StyledMenuItem onClick={OpenProject}>プロジェクト追加</StyledMenuItem>

        <StyledMenuItem onClick={OpenMember}>メンバー招待</StyledMenuItem>
      </StyledMenu>
      <StyledMenu
        id="customized-menu"
        anchorEl={AvatarMenu}
        keepMounted
        open={Boolean(AvatarMenu)}
        onClick={HandleClose}
      >
        <StyledMenuItem onClick={OpenProfile}>プロフィール設定</StyledMenuItem>
        <Link
          to="/workspaces"
          style={{ textDecoration: "none", color: Color.VWORK_BLACK }}
        >
          <StyledMenuItem>他のworkspace </StyledMenuItem>
        </Link>
        <StyledMenuItem>ログアウト</StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default MainHeader;
