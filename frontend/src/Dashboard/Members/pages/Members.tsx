import React from "react";
// import { useSelector } from "react-redux";
import MemberList from "../components/MemberList";
// import { selectProject } from "../../Project/projectSlice";
import Container from "@material-ui/core/Container";

const Members = () => {
  // const project = useSelector(selectProject);

  return (
    <>
      <Container>
        <MemberList />
      </Container>
    </>
  );
};

export default Members;
