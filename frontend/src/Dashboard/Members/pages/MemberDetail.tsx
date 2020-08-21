import React, { useCallback, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import WorkIcon from "@material-ui/icons/Work";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { Box } from "@material-ui/core";
import { Switch, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectWorkspace } from "../../../Auth/authSlice";
import { fetchAsyncGetMember, selectMember } from "../memberSlice";
import { fetchAsyncGetMemberAttendance } from "../../Attendance/attendanceSlice";
import { Route, useParams } from "react-router-dom";
import MainHeader from "../../../shared/components/Navigation/MainHeader";
import DatePickerArea from "../../Attendance/components/DatePickerArea";
import AttendanceList from "../../Attendance/components/AttendanceList";
import { selectAttenances } from "../../Attendance/attendanceSlice";
import ProjectList from "../../Project/components/ProjectList";
import TaskList from "../../Task/components/TaskList";
import { fetchAsyncGetMemberProjects } from "../../Project/projectSlice";

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
    root: {
      flexGrow: 1,
      maxWidth: "60%",
    },
    tabs: {
      backgroundColor: "#fafafa",
      width: "60%",
    },
  })
);

const MemberDetail = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const history = useHistory();
  const handlePageChangeToKintai = () => {
    history.push("/members/:memberId");
  };

  const handlePageChangeToProject = () => {
    history.push("/members/:memberId/project");
  };

  const handlePageChangeToTask = () => {
    history.push("/members/:memberId/task");
  };
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

  const attendances = useSelector(selectAttenances);

  const workspace = useSelector(selectWorkspace);

  const getAttendances = useCallback(
    async (workspace, userId) => {
      await dispatch(
        fetchAsyncGetMemberAttendance({ userId: userId, workspace: workspace })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    if (workspace) {
      getAttendances(workspace, memberId);
    }
  }, [getAttendances, workspace, memberId]);

  const workspaces = useSelector(selectWorkspace);

  const getProjects = useCallback(
    async (workspaces, userId) => {
      await dispatch(
        fetchAsyncGetMemberProjects({ workspaces: workspaces, userId: userId })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    if (workspaces) {
      getProjects(workspaces, memberId);
    }
  }, [getProjects, workspaces, memberId]);

  return (
    <>
      <MainHeader title="メンバー管理" />

      <Grid container direction="column">
        <Container>
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
          <Grid item>
            <Box mt={5}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
                className={classes.tabs}
              >
                <Tab
                  icon={<QueryBuilderIcon />}
                  label="勤怠情報"
                  onClick={handlePageChangeToKintai}
                />
                <Tab
                  icon={<WorkIcon />}
                  label="プロジェクト"
                  onClick={handlePageChangeToProject}
                />
                <Tab
                  icon={<CheckCircleOutlineIcon />}
                  label="タスク"
                  onClick={handlePageChangeToTask}
                />
              </Tabs>
            </Box>
            <Switch>
              <Route Route path="/members/:memberId" exact>
                <DatePickerArea />
                <AttendanceList attendances={attendances} />
              </Route>
              <Route path="/members/:memberId/project" exact>
                <ProjectList title="参加しているプロジェクト" />
              </Route>
              <Route path="/members/:memberId/task" exact>
                <TaskList title="タスク一覧" />
              </Route>
            </Switch>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default MemberDetail;
