import React from "react";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import SideProjectList from "./SideProjectList";
import Color from "../../../shared/util/color";
import { useDispatch } from "react-redux";
import { toggleAddProjectButton } from "../../../appSlice";

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
  const dispatch = useDispatch();
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
          <Grid item>
            <IconButton
              className={classes.iconStyle}
              onClick={() => dispatch(toggleAddProjectButton(true))}
            >
              <AddIcon className={classes.icon} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <SideProjectList />
    </>
  );
};

export default MyProject;
