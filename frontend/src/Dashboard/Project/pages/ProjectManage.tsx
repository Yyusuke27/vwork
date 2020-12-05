import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import MainHeader from "../../../shared/components/Navigation/MainHeader";
import ProjectList from "../components/ProjectList";
import { fetchAsyncAllProjects, setSelectedProject } from "../projectSlice";

const ProjectManage = () => {
  const dispatch = useDispatch();

  const getProjects = useCallback(async () => {
    await dispatch(fetchAsyncAllProjects());
  }, [dispatch]);

  useEffect(() => {
      getProjects();
  }, [getProjects]);

  useEffect(() => {
    return function cleanup() {
      dispatch(setSelectedProject([]));
    };
  }, [dispatch]);

  return (
    <>
      <MainHeader title="プロジェクト管理" />
      <Container>
        <ProjectList title="全てのプロジェクト" selected={true} />
      </Container>
    </>
  );
};

export default ProjectManage;
