import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import AddButtonInProject from "../components/AddButtonInProject";
import ProjectMemberList from "../components/ProjectMemberList";
import TaskList from "../../Task/components/TaskList";
import MainHeader from "../../../shared/components/Navigation/MainHeader";
import {
  fetchAsyncGetProject,
  selectProject,
  setProject,
} from "../projectSlice";
import { fetchAsyncProjectTasks, selectTasks } from "../../Task/taskSlice";
import { setSelectedMembers } from "../../dashboardSlice";

const Project = () => {
  const dispatch = useDispatch();

  const project = useSelector(selectProject);
  const tasks = useSelector(selectTasks);

  interface ParamsType {
    projectId: string;
  }
  const projectId = useParams<ParamsType>().projectId;

  const getProject = useCallback(
    async (projectId) => {
      await dispatch(fetchAsyncGetProject(projectId));
    },
    [dispatch]
  );

  const getTasks = useCallback(
    async (projectId) => {
      await dispatch(fetchAsyncProjectTasks(projectId));
    },
    [dispatch]
  );

  const setMembers = useCallback(
    (members) => {
      dispatch(setSelectedMembers(members));
    },
    [dispatch]
  );

  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      setMembers(project.members);
    } else {
      mounted.current = true;
    }
  }, [setMembers, project]);

  useEffect(() => {
    getProject(projectId);
    getTasks(projectId);
  }, [getProject, getTasks, projectId]);

  // アンマウント時にprojectを空にする
  useEffect(() => {
    return function cleanup() {
      dispatch(
        setProject({
          id: "",
          name: "",
          color: 0,
          icon: 0,
          description: "",
          members: [],
          tasks: [],
        })
      );
    };
  }, [dispatch]);

  return (
    <>
      <Container>
        <MainHeader title={project.name} />
        <Box mb={5} pb={1} borderBottom={1} width="69%">
          <Typography variant="body1">{project.description}</Typography>
        </Box>
        <AddButtonInProject />
        <Grid container direction="row" justify="space-between">
          <Grid item style={{ width: "70%" }}>
            <TaskList title="タスク一覧" taskData={tasks.data} />
          </Grid>
          <Grid item>
            <ProjectMemberList members={project.members} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Project;
