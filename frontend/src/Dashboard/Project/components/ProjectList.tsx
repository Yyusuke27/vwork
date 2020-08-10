import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProjectItem from "./ProjectItem";
import Color from "../../../shared/util/color";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";

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

const projectData = [
  { title: "UI改修", bgColor: Color.VWORK_BLUE },
  { title: "WordPressテーマ開発", bgColor: Color.VWORK_DARK_RED },
  { title: "SEO対策", bgColor: Color.VWORK_RED },
];

const ProjectList = () => {
  const classes = useStyles();
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
                  name={data.title}
                  bgColor={data.bgColor}
                  key={index}
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
