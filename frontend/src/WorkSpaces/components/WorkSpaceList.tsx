import React, { useCallback, useEffect } from "react";

import WorkSpaceItem from "./WorkSpaceItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncGetWorkspaces, selectWorkspaces } from "../workspaceSlice";

import Box from "@material-ui/core/Box";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 20,
      paddingLeft: 10,
    },
    workspacesArea: {
      height: "42vh",
      overflowY: "scroll",
      overflowX: "hidden",
    },
  })
);

const WorkSpaceList = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const getWorkspaces = useCallback(async () => {
    await dispatch(fetchAsyncGetWorkspaces());
  }, [dispatch]);

  useEffect(() => {
    getWorkspaces();
  }, [getWorkspaces]);

  const workspaces = useSelector(selectWorkspaces);

  return (
    <>
      <Box borderBottom={1} className={classes.title} my={5}>
        WORKSPACE一覧
      </Box>
      <Box flexDirection="column" className={classes.workspacesArea}>
        {workspaces.map((workspace, index) => (
          <WorkSpaceItem name={workspace.name} pathId={workspace.path_id} key={index} />
        ))}
      </Box>
    </>
  );
};

export default WorkSpaceList;
