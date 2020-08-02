import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Color from "../../../shared/util/color";
import Drawer from "@material-ui/core/Drawer";
import Backdrop from "@material-ui/core/Backdrop";

const drawerWidth = "55%";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    button: {
      backgroundColor: Color.VWORK_DARK_BLUE,
      width: 150,
      fontSize: 15,
      marginTop: 35,
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

const AddButtonInProject = () => {
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
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={handleDrawerOpen}
          >
            タスクを追加
          </Button>
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
        ></Drawer>
      </Backdrop>
    </>
  );
};

export default AddButtonInProject;
