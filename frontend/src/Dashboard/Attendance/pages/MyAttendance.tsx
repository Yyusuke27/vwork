import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import CheckAttendanceArea from "../components/CheckAttendanceArea";
import DatePickerArea from "../components/DatePickerArea";
import AttendanceList from "../components/AttendanceList";
import MainHeader from "../../../shared/components/Navigation/MainHeader";
import {
  fetchAsyncGetMyAttendances,
  fetchAsyncTodaysAttendance,
  selectAttenances,
} from "../attendanceSlice";

const MyAttendance = () => {
  const dispatch = useDispatch();
  const attendances = useSelector(selectAttenances);

  const getTodaysAttendance = useCallback(
    async () => {
      await dispatch(fetchAsyncTodaysAttendance());
    },
    [dispatch]
  );

  const getAttendances = useCallback(
    async () => {
      await dispatch(fetchAsyncGetMyAttendances());
    },
    [dispatch]
  );

  useEffect(() => {
    getTodaysAttendance();
    getAttendances();
  }, [getTodaysAttendance, getAttendances]);

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
