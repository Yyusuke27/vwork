import React from "react";
import MemberList from "../components/MemberList";
import Container from "@material-ui/core/Container";
import MainHeader from "../../../shared/components/Navigation/MainHeader";

const Members = () => {
  return (
    <>
      <MainHeader title="メンバー管理" />
      <Container>
        <MemberList />
      </Container>
    </>
  );
};

export default Members;
