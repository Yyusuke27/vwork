import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, useHistory } from "react-router";
import { Route, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import WorkIcon from "@material-ui/icons/Work";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { Box } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import MainHeader from "../../../shared/components/Navigation/MainHeader";
import AttendanceInfoInMemberManage from "../components/AttendanceInfoInMemberManage";
import ProjectInMemberManage from "../components/ProjectInMemberManage";
import TaskInMemberManage from "../components/TaskInMemberManage";
import MemberInfo from "../components/MemberInfo";
import { setAttendances } from "../../Attendance/attendanceSlice";
import { setSelectedProject } from "../../Project/projectSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabs: {
      backgroundColor: "#fafafa",
      width: "60%",
    },
  })
);

const MemberDetail = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<{}>, value: number) => {
    return {};
  };

  interface ParamsType {
    memberId: string;
  }

  const memberId = useParams<ParamsType>().memberId;

  const history = useHistory();

  const handlePageChangeToKintai = () => {
    history.push(`/members/${memberId}`);
  };

  const handlePageChangeToProject = () => {
    history.push(`/members/${memberId}/project`);
  };

  const handlePageChangeToTask = () => {
    history.push(`/members/${memberId}/task`);
  };

  useEffect(() => {
    return function cleanup() {
      dispatch(setAttendances([]));
    };
  }, [dispatch]);

  const backPage = () => {
    history.push("/members");
  };

  useEffect(() => {
    return function cleanup() {
      dispatch(setSelectedProject([]));
    };
  }, [dispatch]);

  let tabNum;
  const pathName = window.location.pathname;
  if (pathName.includes("project")) {
    tabNum = 1;
  } else if (pathName.includes("task")) {
    tabNum = 2;
  } else {
    tabNum = 0;
  }

  return (
    <>
      <MainHeader title="メンバー管理" />
      <IconButton onClick={backPage}>
        <ArrowBackIosIcon />
      </IconButton>
      <Grid container direction="column">
        <Container>
          <MemberInfo />
          <Grid item>
            <Box mt={5}>
              <Tabs
                value={tabNum}
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
              <Route path="/members/:memberId" exact>
                <AttendanceInfoInMemberManage />
              </Route>
              <Route path="/members/:memberId/project" exact>
                <ProjectInMemberManage />
              </Route>
              <Route path="/members/:memberId/task" exact>
                <TaskInMemberManage />
              </Route>
            </Switch>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default MemberDetail;
