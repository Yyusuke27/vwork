import React from "react";
import TaskAddButton from "../components/TaskAddButton";
import TaskList from "../components/TaskList";
import TaskMemberList from "../components/TaskMemberList";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const EachProject = () => {
  return (
    <>
      <Container>
        <TaskAddButton />
        <Grid container direction="row" justify="space-between">
          <Grid item>
            <TaskList title="タスク一覧" />
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
