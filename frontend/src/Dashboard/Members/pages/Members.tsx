import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import MemberList from "../components/MemberList";
import MainHeader from "../../../shared/components/Navigation/MainHeader";
import { fetchAsyncGetMembers, selectMembers } from "../memberSlice";

const Members = () => {
  const dispatch = useDispatch();
  const members = useSelector(selectMembers);

  const getMembers = useCallback(
    async () => {
      await dispatch(fetchAsyncGetMembers());
    },
    [dispatch]
  );

  useEffect(() => {
      getMembers();
  }, [getMembers]);

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
