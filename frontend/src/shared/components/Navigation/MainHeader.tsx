import React, { FC } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Color from "../../../shared/util/color";
import { withStyles } from "@material-ui/core/styles";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Avatar from "@material-ui/core/Avatar";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import { fetchAsyncLogout, selectUser } from "../../../Auth/authSlice";
import {
  selectOpenMenu,
  toggleOpenMenu,
  toggleAddTaskButton,
  toggleAddProjectButton,
  toggleInviteMemberClicked,
  toggleSetProfileClicked,
} from "../../../appSlice";

const drawerWidth = 240;

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

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const logoutHandler = async () => {
    await dispatch(fetchAsyncLogout());
  };

  // アドアイコンをクリックした時の処理
  const [addIcon, setAddIcon] = React.useState<null | HTMLElement>(null);
  const addIconClickedOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAddIcon(event.currentTarget);
  };
  const addIconClickedClose = () => {
    setAddIcon(null);
  };

  // アバターアイコンをクリックした時の処理
  const [AvatarIcon, setAvatarIcon] = React.useState<null | HTMLElement>(null);
  const avatarIconClickedOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAvatarIcon(event.currentTarget);
  };
  const avatarIconClickedClose = () => {
    setAvatarIcon(null);
  };

  const openMenu = useSelector(selectOpenMenu);

  return (
    <div className={classes.root}>
      <Container>
        <AppBar
          style={{ backgroundColor: "#fafafa" }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: openMenu,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => dispatch(toggleOpenMenu(true))}
              edge="start"
              className={clsx(openMenu && classes.hide)}
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
                      onClick={addIconClickedOpen}
                      style={{ padding: 0, paddingRight: 10 }}
                    >
                      <AddCircleOutlineIcon className={classes.addIcon} />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      onClick={avatarIconClickedOpen}
                      style={{ padding: 0, paddingRight: 10 }}
                    >
                      <Avatar>{user ? user.name.slice(0, 1) : ""}</Avatar>
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
        anchorEl={addIcon}
        keepMounted
        open={Boolean(addIcon)}
        onClick={addIconClickedClose}
      >
        <StyledMenuItem onClick={() => dispatch(toggleAddTaskButton(true))}>
          タスク追加
        </StyledMenuItem>

        <StyledMenuItem onClick={() => dispatch(toggleAddProjectButton(true))}>
          プロジェクト追加
        </StyledMenuItem>

        <StyledMenuItem
          onClick={() => dispatch(toggleInviteMemberClicked(true))}
        >
          メンバー招待
        </StyledMenuItem>
      </StyledMenu>
      <StyledMenu
        id="customized-menu"
        anchorEl={AvatarIcon}
        keepMounted
        open={Boolean(AvatarIcon)}
        onClick={avatarIconClickedClose}
      >
        <StyledMenuItem onClick={() => dispatch(toggleSetProfileClicked(true))}>
          プロフィール設定
        </StyledMenuItem>
        <Link
          to="/workspaces"
          style={{ textDecoration: "none", color: Color.VWORK_BLACK }}
        >
          <StyledMenuItem>他のworkspace </StyledMenuItem>
        </Link>
        <StyledMenuItem onClick={logoutHandler}>ログアウト</StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default MainHeader;
