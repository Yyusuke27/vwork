import React, { useCallback, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncGetMember, selectMember } from "../memberSlice";
import { useParams } from "react-router-dom";
import { selectWorkspace } from "../../../Auth/authSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile: {
      fontSize: 20,
    },
    profileTitle: {
      color: "#9e9e9e",
    },
    profileItem: {
      margin: 0,
    },
  })
);

const MemberInfo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const member = useSelector(selectMember);

  interface ParamsType {
    memberId: string;
  }
  const memberId = useParams<ParamsType>().memberId;

  const workspaceId = useSelector(selectWorkspace);

  const getMembers = useCallback(
    async (workspaceId) => {
      await dispatch(fetchAsyncGetMember({ workspaceId, id: memberId }));
    },
    [dispatch, memberId]
  );

  useEffect(() => {
    if (workspaceId) {
      getMembers(workspaceId);
    }
  }, [getMembers, workspaceId]);
  return (
    <>
      <Grid item>
        <Grid container direction="row" spacing={5}>
          <Grid item className={classes.profile}>
            <dl>
              <dt className={classes.profileTitle}>氏名</dt>
              <dd className={classes.profileItem}>{member.user.name}</dd>
            </dl>
          </Grid>
          <Grid item className={classes.profile}>
            <dl>
              <dt className={classes.profileTitle}>メールアドレス</dt>
              <dd className={classes.profileItem}>{member.user.email}</dd>
            </dl>
          </Grid>
          <Grid item className={classes.profile}>
            <dl>
              <dt className={classes.profileTitle}>役職・担当</dt>
              <dd className={classes.profileItem}>
                {member.profile && member.profile.position}
              </dd>
            </dl>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MemberInfo;
