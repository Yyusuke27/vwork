import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import Container from "@material-ui/core/Container";
import SideBarOfWorkSpaces from "../../shared/components/Navigation/SideBarOfWorkSpaces";
import WorkSpaceList from "../components/WorkSpaceList";
import { fetchAsyncCurrentUser } from "../../Auth/authSlice";

const WorkSpaces = () => {
  const dispatch = useDispatch();

  const fetchUser = useCallback(async () => {
    await dispatch(fetchAsyncCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <>
      <SideBarOfWorkSpaces />
      <Dialog open keepMounted maxWidth="xl" className="registDialog">
        <Container maxWidth="md">
          <WorkSpaceList />
        </Container>
      </Dialog>
    </>
  );
};

export default WorkSpaces;
