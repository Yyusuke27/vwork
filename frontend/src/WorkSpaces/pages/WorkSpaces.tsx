import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Container from "@material-ui/core/Container";
import SideBarOfWorkSpaces from "../../shared/components/Navigation/SideBarOfWorkSpaces";
import WorkSpaceItem from "../components/WorkSpaceItem";

const WorkSpaces = () => {
  return (
    <>
      <SideBarOfWorkSpaces />
      <Dialog open keepMounted maxWidth="xl" className="registDialog">
        <Container maxWidth="md">
          <WorkSpaceItem />
        </Container>
      </Dialog>
    </>
  );
};

export default WorkSpaces;
