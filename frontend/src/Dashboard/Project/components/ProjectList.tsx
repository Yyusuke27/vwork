import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProjectItem from "./ProjectItem";
import Color from "../../../shared/util/color";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import { useSelector } from "react-redux";
import { selectProjects } from "../projectSlice";

const useStyles = makeStyles({
  title: {
    fontSize: 23,
    width: "30%",
  },
  contentWidth: {
    width: 150,
  },
  icon: {
    fontSize: 55,
  },
  iconStyle: {
    borderStyle: "dotted",
    borderRadius: 8,
    height: 150,
    cursor: "pointer",
  },
  iconArea: {
    height: 150,
    borderRadius: 8,
  },
});

const ProjectList = () => {
  const classes = useStyles();

  const projectData = useSelector(selectProjects);

  const PROJECT_COLORS = [
    Color.VWORK_BLUE,
    Color.VWORK_RED,
    Color.VWORK_ORANGE,
    Color.VWORK_GREEN,
    Color.VWORK_DARK_BLUE,
    Color.VWORK_DARK_RED,
    Color.VWORK_YELLOW,
  ];

  return (
    <>
      <Box borderBottom={1} mt={7} mb={4} className={classes.title}>
        参加しているプロジェクト
      </Box>
      <Grid container>
        <Grid item>
          <Grid container justify="flex-start">
            {projectData.map((data, index) => {
              return (
                <ProjectItem
                  name={data.name}
                  bgColor={PROJECT_COLORS[data.color]}
                  iconNum={data.icon}
                  key={data._id}
                />
              );
            })}
          </Grid>
        </Grid>
        <Grid item>
          <Box
            className={clsx(classes.contentWidth, classes.iconStyle)}
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
                <AddIcon style={{ fontSize: 100 }} />
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
