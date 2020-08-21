import React, { useCallback, useEffect } from "react";
import ProjectList from "../../Project/components/ProjectList";
import { fetchAsyncGetMemberProjects } from "../../Project/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectWorkspace } from "../../../Auth/authSlice";

const ProjectInMemberManage = () => {
  interface ParamsType {
    memberId: string;
  }
  const memberId = useParams<ParamsType>().memberId;
  const workspaceId = useSelector(selectWorkspace);
  const dispatch = useDispatch();
  const getProjects = useCallback(
    async (workspace, userId) => {
      await dispatch(
        fetchAsyncGetMemberProjects({ workspace: workspace, userId: userId })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    if (workspaceId) {
      getProjects(workspaceId, memberId);
    }
  }, [getProjects, workspaceId, memberId]);
  return (
    <>
      <ProjectList title="参加しているプロジェクト" />
    </>
  );
};

export default ProjectInMemberManage;
