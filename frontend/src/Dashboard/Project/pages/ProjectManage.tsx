import React from "react";
import Container from "@material-ui/core/Container";
import MainHeader from "../../../shared/components/Navigation/MainHeader";
import ProjectList from "../components/ProjectList";

const ProjectManage = () => {
  return (
    <>
      <MainHeader title="プロジェクト管理" />
      <Container>
        <ProjectList title="全てのプロジェクト" />
      </Container>
    </>
  );
};

export default ProjectManage;
