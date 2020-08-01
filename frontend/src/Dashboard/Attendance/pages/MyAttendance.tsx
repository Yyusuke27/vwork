import React from "react";
import CheckAttendanceArea from "../components/CheckAttendanceArea";
import DatePickerArea from "../components/DatePickerArea";
import Container from "@material-ui/core/Container";
import AttendanceList from "../components/AttendanceList";
import MainHeader from "../../../shared/components/Navigation/MainHeader";

const MyAttendance = () => {
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
