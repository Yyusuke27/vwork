import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DatePickerArea from "../../Attendance/components/DatePickerArea";
import AttendanceList from "../../Attendance/components/AttendanceList";
import {
  fetchAsyncGetMemberAttendance,
  selectAttenances,
} from "../../Attendance/attendanceSlice";
import { selectWorkspace } from "../../../Auth/authSlice";

const AttendanceInfoInMemberManage = () => {
  interface ParamsType {
    memberId: string;
  }
  const memberId = useParams<ParamsType>().memberId;
  const workspaceId = useSelector(selectWorkspace);
  const dispatch = useDispatch();
  const attendances = useSelector(selectAttenances);
  const getAttendances = useCallback(
    async (workspace, userId) => {
      await dispatch(
        fetchAsyncGetMemberAttendance({ userId: userId, workspace: workspace })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    if (workspaceId) {
      getAttendances(workspaceId, memberId);
    }
  }, [getAttendances, workspaceId, memberId]);
  return (
    <>
      <DatePickerArea userId={memberId} />
      <AttendanceList attendances={attendances} />
    </>
  );
};

export default AttendanceInfoInMemberManage;
