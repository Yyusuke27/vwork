import React from "react";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import EacProjectList from "../../../shared/components/Navigation/EachProjectList";
import Color from "../../../shared/util/color";

const defaultProps = {
  m: 2,
  style: { width: "13rem" },
  borderColor: "text.primary",
};

const DrawerWith = "50%";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 15,
      marginTop: 70,
    },
    iconStyle: {
      color: Color.VWORK_WHITE,
      padding: 0,
    },
    icon: {
      borderRadius: 10,
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

const MyProject = () => {
  const classes = useStyles();
  return (
    <>
      <Box borderBottom={1} {...defaultProps} className={classes.title}>
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
            <IconButton className={classes.iconStyle}>
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
