import React from "react";
import AttendanceItem from "./AttendanceItem";
import Grid from "@material-ui/core/Grid";
const AttendanceList = () => {
  return (
    <>
      <Grid container direction="column" justify="flex-start">
        <Grid item>
          <AttendanceItem />
        </Grid>
      </Grid>
    </>
  );
};

export default AttendanceList;
