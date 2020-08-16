import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import TaskList from "../../Task/components/TaskList";
import {
  selectMemberIconClicked,
  toggleMemberIconClicked,
} from "../../../appSlice";
import { selectWorkspace } from "../../../Auth/authSlice";
import {
  fetchAsyncGetMember,
  selectProject,
  selectProjectMember,
  selectSelectedProjectMember,
  setProjectMember,
} from "../projectSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    closeIcon: {
      padding: 0,
    },
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

const ProjectMemberClickedDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const workspace = useSelector(selectWorkspace);
  const MemberIconClicked = useSelector(selectMemberIconClicked);
  const project = useSelector(selectProject);
  const selectedProjectMember = useSelector(selectSelectedProjectMember);
  const member = useSelector(selectProjectMember);

  const getMember = useCallback(
    async (workspaces, projectId, userId) => {
      await dispatch(fetchAsyncGetMember({ workspaces, projectId, userId }));
    },
    [dispatch]
  );

  useEffect(() => {
    getMember(workspace, project._id, selectedProjectMember);
  }, [getMember, workspace, project, selectedProjectMember]);

  return (
    <>
      <VwDrawer
        open={MemberIconClicked}
        click={() => {
          dispatch(
            setProjectMember({
              user: {
                _id: "",
                name: "",
                email: "",
                registration: false,
                role: "",
                lastAccessWorkspace: "",
              },
              tasks: [],
              profile: { position: "" },
            })
          );
          dispatch(toggleMemberIconClicked(false));
        }}
      >
        <Box mt={13}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Container maxWidth="md">
              <Grid item>
                <Grid container direction="row" spacing={5}>
                  <Grid item className={classes.profile}>
                    <dl>
                      <dt className={classes.profileTitle}>氏名</dt>
                      <dd className={classes.profileItem}>
                        {member.user.name}
                      </dd>
                    </dl>
                  </Grid>
                  <Grid item className={classes.profile}>
                    <dl>
                      <dt className={classes.profileTitle}>メールアドレス</dt>
                      <dd className={classes.profileItem}>
                        {member.user.email}
                      </dd>
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
              <Grid
                item
                onClick={() => dispatch(toggleMemberIconClicked(false))}
                data-testid="testID"
              >
                <TaskList
                  title="プロジェクト内担当タスク"
                  taskData={member.tasks}
                />
              </Grid>
            </Container>
          </Grid>
        </Box>
      </VwDrawer>
    </>
  );
};

export default ProjectMemberClickedDrawer;
