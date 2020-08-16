import React, { useCallback, useEffect } from "react";
import CheckAttendanceArea from "../components/CheckAttendanceArea";
import DatePickerArea from "../components/DatePickerArea";
import AttendanceList from "../components/AttendanceList";
import MainHeader from "../../../shared/components/Navigation/MainHeader";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { selectWorkspace } from "../../../Auth/authSlice";
import {
  fetchAsyncGetMyAttendances,
  fetchAsyncTodaysAttendance,
  selectAttenances,
} from "../attendanceSlice";

const MyAttendance = () => {
  const dispatch = useDispatch();
  const workspace = useSelector(selectWorkspace);
  const attendances = useSelector(selectAttenances);

  const getTodaysAttendance = useCallback(
    async (workspace) => {
      await dispatch(fetchAsyncTodaysAttendance(workspace));
    },
    [dispatch]
  );

  const getAttendances = useCallback(
    async (workspace) => {
      await dispatch(fetchAsyncGetMyAttendances(workspace));
    },
    [dispatch]
  );

  useEffect(() => {
    if (workspace) {
      getTodaysAttendance(workspace);
      getAttendances(workspace);
    }
  }, [workspace, getTodaysAttendance, getAttendances]);

  return (
    <>
      <Container>
        <MainHeader title="勤怠管理" />
        <CheckAttendanceArea />
        <DatePickerArea />
        <AttendanceList attendances={attendances} />
      </Container>
    </>
  );
};

export default MyAttendance;
