import React from "react";
import { useDispatch } from "react-redux";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import SideProjectList from "./SideProjectList";
import Color from "../../../shared/util/color";
import { toggleAddProjectButton } from "../../../appSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 15,
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
      <Box borderBottom={1} mt={3} mx={2} mb={2} className={classes.title}>
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
              data-testid="test"
            >
              <AddIcon className={classes.icon} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Box mb={5}>
        <SideProjectList />
      </Box>
    </>
  );
};

export default MyProject;
