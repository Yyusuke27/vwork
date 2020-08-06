import React, { FC, useContext } from "react";
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
import HeaderAddButton from "./HeaderAddButton";

const drawerWidth = 240;
const DrawerWith = "55%";

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
  const { handleDrawerOpen, open } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // @ts-ignore
  return (
    <div className={classes.root}>
      {/*<AppContext.Provider value={[anchorEl]}>*/}
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
                    <Avatar
                      alt="Shogo Yunoki"
                      src="/static/images/avatar/1.jpg"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Container>

      <HeaderAddButton />
      {/*</AppContext.Provider>*/}
    </div>
  );
};

export default MainHeader;
