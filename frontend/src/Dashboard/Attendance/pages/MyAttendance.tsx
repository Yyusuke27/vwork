import React from "react";
import CheckAttendanceArea from "../components/CheckAttendanceArea";
import DatePickerArea from "../components/DatePickerArea";
import Container from "@material-ui/core/Container";

const MyAttendance = () => {
  return (
    <>
      <Container>
        <CheckAttendanceArea />
        <DatePickerArea />
      </Container>
    </>
  );
};

export default MyAttendance;
