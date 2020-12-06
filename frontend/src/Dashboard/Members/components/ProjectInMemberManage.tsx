import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProjectList from "../../Project/components/ProjectList";
import { fetchAsyncGetMemberProjects } from "../../Project/projectSlice";

const ProjectInMemberManage = () => {
  interface ParamsType {
    memberId: string;
  }
  const memberId = useParams<ParamsType>().memberId;
  const dispatch = useDispatch();
  const getProjects = useCallback(
    async (userId) => {
      await dispatch(
        fetchAsyncGetMemberProjects(userId)
      );
    },
    [dispatch]
  );

  useEffect(() => {
    getProjects(memberId);
  }, [getProjects, memberId]);

  return (
    <>
      <ProjectList title="参加しているプロジェクト" selected={true} />
    </>
  );
};

export default ProjectInMemberManage;
