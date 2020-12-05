import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import SideBarOfWorkSpaces from "../../shared/components/Navigation/SideBarOfWorkSpaces";
import WorkSpaceList from "../components/WorkSpaceList";
import { fetchAsyncCurrentUser } from "../../Auth/authSlice";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import "./Workspaces.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      backgroundColor: '#F50357',
      color: '#ffffff',
      fontSize: 24,
      paddingLeft: 10,
    },
  })
);

const WorkSpaces = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const fetchUser = useCallback(async () => {
    await dispatch(fetchAsyncCurrentUser(""));
  }, [dispatch]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <>
      <SideBarOfWorkSpaces />
      <Dialog open keepMounted maxWidth="xl" className="workspaceDialog">
        <Box className={classes.title} pt={5} pb={1} mb={5}>
          WORKSPACES
        </Box>
        <Container maxWidth="md">
          <WorkSpaceList />
        </Container>
      </Dialog>
    </>
  );
};

export default WorkSpaces;
