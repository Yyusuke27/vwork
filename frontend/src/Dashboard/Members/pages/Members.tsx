import React, { useCallback, useEffect } from "react";
import MemberList from "../components/MemberList";
import Container from "@material-ui/core/Container";
import MainHeader from "../../../shared/components/Navigation/MainHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncGetMembers, selectMembers } from "../memberSlice";
import { selectWorkspace } from "../../../Auth/authSlice";

const Members = () => {
  const dispatch = useDispatch();
  const members = useSelector(selectMembers);

  const workspaceId = useSelector(selectWorkspace);

  const getMembers = useCallback(
    async (workspaceId) => {
      await dispatch(fetchAsyncGetMembers(workspaceId));
    },
    [dispatch]
  );

  useEffect(() => {
    if (workspaceId) {
      getMembers(workspaceId);
    }
  }, [getMembers, workspaceId]);

  return (
    <>
      <MainHeader title="メンバー管理" />
      <Container>
        <MemberList members={members} />
      </Container>
    </>
  );
};

export default Members;
