import React from "react";
import CheckAttendanceArea from "../components/CheckAttendanceArea";
import DatePickerArea from "../components/DatePickerArea";
import AttendanceList from "../components/AttendanceList";
import MainHeader from "../../../shared/components/Navigation/MainHeader";
import Container from "@material-ui/core/Container";

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
