import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Color from "../../../shared/util/color";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import Grid from "@material-ui/core/Grid";

const defaultProps = {
  m: 1,
  style: { width: "20rem" },
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 10,
    backgroundColor: "",
    height: 185,
  },

  title: {
    fontSize: 18,
  },
  color: {
    backgroundColor: Color.VWORK_BLUE,
  },
  icon: {
    fontSize: 55,
  },
  iconArea: {
    backgroundColor: Color.VWORK_BLUE,
    color: "white",
    height: 150,
    borderRadius: 8,
  },
  contentWidth: {
    width: 150,
  },
});

const ProjectArea = () => {
  const classes = useStyles();
  return (
    <>
      <Box borderBottom={1} {...defaultProps} className={classes.title} mt={10}>
        参加しているプロジェクト
      </Box>
      <Grid container>
        <Grid item xs={2} container direction="column">
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            className={clsx(classes.iconArea, classes.contentWidth)}
          >
            <FormatListBulletedIcon className={classes.icon} />
          </Grid>
          <Grid item className={classes.contentWidth}>
            <Box textAlign="center">
              <Typography>UI改修</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={2} container direction="column">
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            className={clsx(classes.iconArea, classes.contentWidth)}
          >
            <FormatListBulletedIcon className={classes.icon} />
          </Grid>
          <Grid item className={classes.contentWidth}>
            <Box textAlign="center">
              <Typography>WordPressテーマ開発</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={2} container direction="column">
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            className={clsx(classes.iconArea, classes.contentWidth)}
          >
            <FormatListBulletedIcon className={classes.icon} />
          </Grid>
          <Grid item className={classes.contentWidth}>
            <Box textAlign="center">
              <Typography>SEO対策</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={2} container direction="column">
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            className={clsx(classes.iconArea, classes.contentWidth)}
          >
            <FormatListBulletedIcon className={classes.icon} />
          </Grid>
          <Grid item className={classes.contentWidth}>
            <Box textAlign="center">
              <Typography>プロジェクト作成</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectArea;
