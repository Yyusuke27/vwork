import React, { FC, useState } from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Backdrop from "@material-ui/core/Backdrop";

const drawerWidth = "55%";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 30,
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
  })
);

interface TaskMemberItemProps {
  name: string;
  icon: string;
}

const TaskMemberItem: FC<TaskMemberItemProps> = ({ name = "", icon = "" }) => {
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
      <ListItem button style={{ paddingTop: 0 }} onClick={handleDrawerOpen}>
        <ListItemIcon>
          <Avatar className={classes.icon}>{icon}</Avatar>
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        ></Drawer>
      </Backdrop>
    </>
  );
};

export default TaskMemberItem;
