import React, { useContext } from "react";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import EacProjectList from "../../../shared/components/Navigation/EachProjectList";
import Color from "../../../shared/util/color";
import AppContext from "../../../AppContext";
import Drawer from "@material-ui/core/Drawer";
import Backdrop from "@material-ui/core/Backdrop";

const DrawerWith = "50%";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 15,
      width: 190,
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
    iconStyle: {
      color: Color.VWORK_WHITE,
      padding: 0,
    },
    icon: {
      borderRadius: 10,
    },
  })
);

const MyProject = () => {
  const classes = useStyles();
  // @ts-ignore
  const { OpenTask, CloseTask, openTask } = useContext(AppContext);
  return (
    <>
      <Box borderBottom={1} mt={10} ml={2} mb={2} className={classes.title}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography>マイプロジェクト</Typography>
          </Grid>
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
          <Grid item>
            <IconButton className={classes.iconStyle} onClick={OpenTask}>
              <AddIcon className={classes.icon} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <EacProjectList />
    </>
  );
};

export default MyProject;
