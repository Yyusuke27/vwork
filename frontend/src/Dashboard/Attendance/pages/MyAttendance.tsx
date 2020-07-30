import React from "react";
import CheckAttendanceArea from "../components/CheckAttendanceArea";
import DatePickerArea from "../components/DatePickerArea";
import Container from "@material-ui/core/Container";
import AttendanceItem from "../components/AttendanceItem";

const MyAttendance = () => {
  return (
    <>
      <Container>
        <CheckAttendanceArea />
        <DatePickerArea />
        <AttendanceItem />
      </Container>
    </>
  );
};

export default MyAttendance;
