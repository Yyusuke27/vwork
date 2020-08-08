import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Color from "../../../shared/util/color";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";

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
  })
);

interface MainHeaderOfAdminProps {
  handleDrawerOpen: () => void;
  open: boolean;
}

const MainHeaderOfAdmin: FC<MainHeaderOfAdminProps> = ({
  handleDrawerOpen,
  open,
}) => {
  const classes = useStyles();

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
                  ホーム
                </Typography>
              </Grid>
              <Grid item>
                <Grid item>
                  <IconButton>
                    <Avatar
                      alt="Shogo Yunoki"
                      src="/static/images/avatar/1.jpg"
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
};

export default MainHeaderOfAdmin;
