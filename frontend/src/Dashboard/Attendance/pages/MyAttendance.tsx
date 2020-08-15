import React, { useCallback, useEffect, useRef } from "react";
import CheckAttendanceArea from "../components/CheckAttendanceArea";
import DatePickerArea from "../components/DatePickerArea";
import AttendanceList from "../components/AttendanceList";
import MainHeader from "../../../shared/components/Navigation/MainHeader";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { selectWorkspace } from "../../../Auth/authSlice";
import { fetchAsyncTodaysAttendance } from "../attendanceSlice";

const MyAttendance = () => {
  const dispatch = useDispatch();
  const workspace = useSelector(selectWorkspace);

  const getTodaysAttendance = useCallback(
    async (workspace) => {
      await dispatch(fetchAsyncTodaysAttendance(workspace));
    },
    [dispatch]
  );

  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      getTodaysAttendance(workspace);
    } else {
      mounted.current = true;
    }
  }, [workspace, getTodaysAttendance]);

  return (
    <>
      <Container>
        <MainHeader title="勤怠管理" />
        <CheckAttendanceArea />
        <DatePickerArea />
        <AttendanceList />
      </Container>
    </>
  );
};

export default MyAttendance;
