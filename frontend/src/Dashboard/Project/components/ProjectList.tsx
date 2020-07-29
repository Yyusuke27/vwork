import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProjectItem from "./ProjectItem";
import Color from "../../../shared/util/color";

const defaultProps = {
  m: 1,
  style: { width: "20rem" },
};

const useStyles = makeStyles({
  title: {
    fontSize: 18,
  },
});

const projectData = [
  { title: "UI改修", bgcolor: Color.VWORK_LIGHT_BLUE },
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
      <Grid container justify="flex-start">
        {projectData.map((data) => {
          return <ProjectItem name={data.title} bgcolor={data.bgcolor} />;
        })}
      </Grid>
    </>
  );
};

export default ProjectList;
