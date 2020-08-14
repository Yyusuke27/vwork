import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
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
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
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
    mainTitle: {
      paddingLeft: 3,
      fontSize: 30,
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
    iconStyle: {
      color: Color.VWORK_WHITE,
    },
    title: {
      fontWeight: 900,
    },
    projectTitle: {
      fontSize: 15,
      marginTop: "40%",
      marginLeft: "5%",
      marginBottom: "5%",
      width: 190,
    },
  })
);

const SideBarOfWorkSpaces = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Drawer
          open
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
                <Grid item className={clsx(classes.mainTitle, "logo")}>
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
              <ListItemIcon className={classes.iconStyle}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="ホーム" />
            </ListItem>
            <ListItem button component={NavLink} to="/mytask" exact>
              <ListItemIcon className={classes.iconStyle}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="マイタスク" />
            </ListItem>
            <ListItem button component={NavLink} to="/kintai_manage" exact>
              <ListItemIcon className={classes.iconStyle}>
                <QueryBuilderIcon />
              </ListItemIcon>
              <ListItemText primary="勤怠管理" />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={classes.iconStyle}>
                <NotificationsNoneIcon />
              </ListItemIcon>
              <ListItemText primary="受信ボックス" />
            </ListItem>
          </List>
          <Box borderBottom={1} className={classes.projectTitle}>
            <Typography>マイプロジェクト</Typography>
          </Box>
        </Drawer>
      </Container>
    </div>
  );
};

export default SideBarOfWorkSpaces;
