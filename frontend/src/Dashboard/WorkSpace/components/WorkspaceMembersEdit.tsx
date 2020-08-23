import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncGetMembers, selectMembers } from "../../Members/memberSlice";
import {
  fetchAsyncCurrentUser,
  selectWorkspace,
  selectWorkspaceOwners,
} from "../../../Auth/authSlice";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { fetchAsyncUpdateWorkspace } from "../../../WorkSpaces/workspaceSlice";

const WorkspaceMembersEdit = () => {
  const dispatch = useDispatch();
  const members = useSelector(selectMembers);

  const workspaceId = useSelector(selectWorkspace);

  const owners = useSelector(selectWorkspaceOwners);

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

  const toOwnerHandler = async (toOwnerId: string) => {
    await dispatch(
      fetchAsyncUpdateWorkspace({
        workspace: workspaceId,
        bodyData: { toOwner: toOwnerId },
      })
    );
    await dispatch(fetchAsyncCurrentUser());
  };

  const toMemberHandler = async (toMemberId: string) => {
    await dispatch(
      fetchAsyncUpdateWorkspace({
        workspace: workspaceId,
        bodyData: { toMember: toMemberId },
      })
    );
    await dispatch(fetchAsyncCurrentUser());
  };

  return (
    <>
      <Box borderBottom={1} width="90%" mb={2}>
        <Typography variant="h5" component="h2">
          メンバー設定
        </Typography>
      </Box>
      {members.length > 0 &&
        members.map((member, index) => {
          return (
            <Box mb={2} key={index}>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography variant="h6">{member.name}</Typography>
                </Grid>
                <Grid item>
                  （{owners.includes(member._id) ? "管理者" : "メンバー"}）
                </Grid>
                {owners.includes(member._id) ? (
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => toMemberHandler(member._id)}
                    >
                      メンバーに変更する
                    </Button>
                  </Grid>
                ) : (
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => toOwnerHandler(member._id)}
                    >
                      管理者に変更する
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Box>
          );
        })}
    </>
  );
};

export default WorkspaceMembersEdit;
