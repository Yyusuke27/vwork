import React from "react";

import MainHeader from "../../../shared/components/Navigation/MainHeader";

import Container from "@material-ui/core/Container";
import WorkspaceBasicEdit from "../components/WorkspaceBasicEdit";
import WorkspaceMembersEdit from "../components/WorkspaceMembersEdit";
import { Box } from "@material-ui/core";

const WorkspaceManage = () => {
  return (
    <Container>
      <MainHeader title="ワークスペース管理" />
      <Box>
        <WorkspaceBasicEdit />
      </Box>
      <Box mt={5}>
        <WorkspaceMembersEdit />
      </Box>
    </Container>
  );
};

export default WorkspaceManage;
