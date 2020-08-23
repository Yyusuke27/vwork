import React, { useCallback, useEffect } from "react";
import Container from "@material-ui/core/Container";
import MainHeader from "../../../shared/components/Navigation/MainHeader";
import ProjectList from "../components/ProjectList";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncAllProjects, setSelectedProject } from "../projectSlice";
import { selectWorkspace } from "../../../Auth/authSlice";

const ProjectManage = () => {
  const dispatch = useDispatch();
  const workspace = useSelector(selectWorkspace);

  const getProjects = useCallback(async () => {
    await dispatch(fetchAsyncAllProjects(workspace));
  }, [dispatch, workspace]);

  useEffect(() => {
    if (workspace) {
      getProjects();
    }
  }, [getProjects, workspace]);

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
