import React from "react";
import AddButtonInProject from "../components/AddButtonInProject";
import ProjectMemberList from "../components/ProjectMemberList";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TaskList from "../../Task/components/TaskList";
import MainHeader from "../../../shared/components/Navigation/MainHeader";

const Project = () => {
  return (
    <>
      <Container maxWidth="xl">
        <MainHeader title="UI改修" />
        <AddButtonInProject />
        <Grid container direction="row" justify="space-between">
          <Grid item style={{ width: "70%" }}>
            <TaskList title="タスク一覧" />
          </Grid>
          <Grid item>
            <ProjectMemberList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Project;
