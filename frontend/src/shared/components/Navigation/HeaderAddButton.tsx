import React, { useState } from "react";
import { bindMenu, usePopupState } from "material-ui-popup-state/hooks";
import Backdrop from "@material-ui/core/Backdrop";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const DrawerWith = "55%";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

const HeaderAddButton = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });

  const [openTask, setOpenTask] = useState(false);
  const OpenTask = () => {
    setOpenTask(true);
  };
  const CloseTask = () => {
    setOpenTask(false);
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
  return (
    <>
      <Menu
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        // anchorPosition={{ right: 200, top: 1000 }}
        id="simple-menu"
        // anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
      >
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
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
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
    </>
  );
};

export default HeaderAddButton;
