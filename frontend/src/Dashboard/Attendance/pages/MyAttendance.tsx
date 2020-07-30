import React from "react";
import CheckAttendanceArea from "../components/CheckAttendanceArea";
import DatePickerArea from "../components/DatePickerArea";
import Container from "@material-ui/core/Container";
import AttendanceList from "../components/AttendanceList";

const MyAttendance = () => {
  return (
    <>
      <Container>
        <CheckAttendanceArea />
        <DatePickerArea />
        <AttendanceList />
      </Container>
    </>
  );
};

export default MyAttendance;
