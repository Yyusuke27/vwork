import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { PROJECT_COLORS } from "../../../shared/util/color";
import ProjectItem from "./ProjectItem";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import { selectProjects, selectSelectedProjects } from "../projectSlice";
import { toggleAddProjectButton } from "../../../appSlice";

const useStyles = makeStyles({
  title: {
    fontSize: 23,
    width: "30%",
  },
  contentWidth: {
    width: 150,
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

interface ProjectListProps {
  title: string;
  selected?: boolean;
}

const ProjectList: FC<ProjectListProps> = ({ title = "", selected }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const selectedProjects = useSelector(selectSelectedProjects);
  const projects = useSelector(selectProjects);
  
  const projectData = selected ? selectedProjects : projects;

  return (
    <>
      <Box borderBottom={1} mt={7} mb={4} className={classes.title}>
        {title}
      </Box>

      <Grid container justify="flex-start">
        <Box
          className={clsx(classes.contentWidth, classes.iconStyle)}
          mr={3}
          mb={3}
          onClick={() => dispatch(toggleAddProjectButton(true))}
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
        {projectData.map((data) => {
          return (
            <ProjectItem
              id={data.id}
              name={data.name}
              bgColor={PROJECT_COLORS[data.color]}
              iconNum={data.icon}
              key={data.id}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default ProjectList;
