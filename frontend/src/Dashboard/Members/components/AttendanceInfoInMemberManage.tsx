import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DatePickerArea from "../../Attendance/components/DatePickerArea";
import AttendanceList from "../../Attendance/components/AttendanceList";
import {
  fetchAsyncGetMemberAttendance,
  selectAttenances,
} from "../../Attendance/attendanceSlice";

const AttendanceInfoInMemberManage = () => {
  interface ParamsType {
    memberId: string;
  }
  const memberId = useParams<ParamsType>().memberId;
  const dispatch = useDispatch();
  const attendances = useSelector(selectAttenances);
  const getAttendances = useCallback(
    async (userId) => {
      await dispatch(
        fetchAsyncGetMemberAttendance({ userId: userId })
      );
    },
    [dispatch]
  );

  useEffect(() => {
      getAttendances(memberId);
  }, [getAttendances, memberId]);
  return (
    <>
      <DatePickerArea userId={memberId} />
      <AttendanceList attendances={attendances} />
    </>
  );
};

export default AttendanceInfoInMemberManage;
