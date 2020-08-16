import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddMemberList from "./AddMemberList";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import {
  selectAddMemberButton,
  toggleAddMemberButton,
} from "../../../appSlice";
import { fetchAsyncGetNewMembers, selectProject } from "../projectSlice";
import { selectWorkspace } from "../../../Auth/authSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    closeIcon: {
      padding: 0,
    },
    drawerTitle: {
      fontSize: 25,
      width: "85%",
    },
    button: {
      width: 300,
    },
  })
);

const NewAddProjectMemberDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const addMemberButton = useSelector(selectAddMemberButton);
  const workspaces = useSelector(selectWorkspace);
  const project = useSelector(selectProject);
  const projectId = project._id;

  const getNewMembers = useCallback(
    async (workspaces, projectId) => {
      await dispatch(fetchAsyncGetNewMembers({ workspaces, projectId }));
    },
    [dispatch]
  );
  useEffect(() => {
    getNewMembers(workspaces, projectId);
  }, [getNewMembers, projectId, workspaces]);

  return (
    <>
      <VwDrawer
        open={addMemberButton}
        click={() => dispatch(toggleAddMemberButton(false))}
      >
        <Container maxWidth="md">
          <Box borderBottom={1} mt={10} mb={5} className={classes.drawerTitle}>
            追加するメンバーを選択
          </Box>
          <AddMemberList />
        </Container>
      </VwDrawer>
    </>
  );
};

export default NewAddProjectMemberDrawer;
