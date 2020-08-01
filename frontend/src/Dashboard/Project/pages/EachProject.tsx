import React from "react";
import AddButtonInProject from "../components/AddButtonInProject";
import TaskMemberList from "../../Task/components/TaskMemberList";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TaskList from "../../Task/components/TaskList";
import MainHeader from "../../../shared/components/Navigation/MainHeader";

const EachProject = () => {
  return (
    <>
      <Container>
        <MainHeader title="UI改修" />
        <AddButtonInProject />
        <Grid container direction="row" justify="space-between">
          <Grid item style={{ width: "70%" }}>
            <TaskList title="タイトル一覧" />
          </Grid>
          <Grid item>
            <TaskMemberList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EachProject;
