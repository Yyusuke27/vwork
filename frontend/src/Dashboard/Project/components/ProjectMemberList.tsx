import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Grid from "@material-ui/core/Grid";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ProjectMemberItem from "./ProjectMemberItem";
import Drawer from "@material-ui/core/Drawer";
import Backdrop from "@material-ui/core/Backdrop";
import Container from "@material-ui/core/Container";

const drawerWidth = "55%";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 23,
      width: 300,
      marginTop: "15%",
      marginBottom: "2%",
    },
    icon: {
      fontSize: 45,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    drawertitle: {
      fontSize: 25,
      width: "100%",
    },
  })
);

const programDate = [
  { name: "SHOGO YUNOKI", icon: "S" },
  { name: "YUSUKE YUNOKI", icon: "Y" },
  { name: "IKUMI YUNOKI", icon: "I" },
];

const ProjectMemberList = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Box borderBottom={1} className={classes.title}>
        メンバー
      </Box>
      <Grid container direction="column" justify="flex-start">
        <Grid item>
          <ListItem
            button
            onClick={handleDrawerOpen}
            style={{ paddingLeft: 0 }}
          >
            <ListItemIcon>
              <AddCircleOutlineIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="メンバーを追加" />
          </ListItem>
        </Grid>
        <Grid item>
          {programDate.map((date, index) => {
            return (
              <ProjectMemberItem
                name={date.name}
                icon={date.icon}
                key={index}
              />
            );
          })}
        </Grid>
      </Grid>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Container maxWidth="md">
            <Box borderBottom={1} className={classes.drawertitle}>
              メンバー
            </Box>
          </Container>
        </Drawer>
      </Backdrop>
    </>
  );
};

export default ProjectMemberList;
