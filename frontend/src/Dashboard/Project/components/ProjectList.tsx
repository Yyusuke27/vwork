import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProjectItem from "./ProjectItem";
import Color from "../../../shared/util/color";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";

const defaultProps = {
  m: 1,
  style: { width: "20rem" },
};

const useStyles = makeStyles({
  title: {
    fontSize: 18,
  },
  contentWidth: {
    width: 150,
  },
  iconArea: {
    height: 150,
    borderRadius: 8,
  },
  boxstyle: {
    borderStyle: "dotted",
  },
  icon: {
    fontSize: 55,
  },
  iconstyle: {
    borderStyle: "dotted",
    borderRadius: 8,
    height: 150,
  },
});

const projectData = [
  { title: "UI改修", bgcolor: Color.VWORK_BLUE },
  { title: "WordPressテーマ開発", bgcolor: Color.VWORK_DARK_RED },
  { title: "SEO対策", bgcolor: Color.VWORK_RED },
];

const ProjectList = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        borderBottom={1}
        {...defaultProps}
        className={classes.title}
        mt={10}
        mb={3}
      >
        参加しているプロジェクト
      </Box>
      <Grid container>
        <Grid item>
          <Grid container justify="flex-start">
            {projectData.map((data) => {
              return <ProjectItem name={data.title} bgcolor={data.bgcolor} />;
            })}
          </Grid>
        </Grid>
        <Grid item>
          <Box
            className={clsx(classes.contentWidth, classes.iconstyle)}
            mr={3}
            mb={3}
          >
            <Grid container direction="column">
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                className={clsx(classes.iconArea, classes.contentWidth)}
              >
                <IconButton aria-label="add">
                  <AddIcon style={{ fontSize: 100 }} />
                </IconButton>
              </Grid>
              <Grid item className={classes.contentWidth}>
                <Box textAlign="center">
                  <Typography>プロジェクト作成</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectList;
