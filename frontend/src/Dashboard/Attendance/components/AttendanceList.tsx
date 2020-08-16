import React, { FC } from "react";
import AttendanceItem from "./AttendanceItem";
import Grid from "@material-ui/core/Grid";

interface AttendanceListProps {
  attendances: {
    tasks: string[];
    _id: string;
    user: string;
    workspace: string;
    createdAt: string;
    startedAt: string;
    endedAt: string;
    restStartedAt: string;
    restEndedAt: string;
    comment: string;
  }[];
}

const AttendanceList: FC<AttendanceListProps> = ({ attendances }) => {
  return (
    <>
      <Grid container direction="column" justify="flex-start">
        <Grid item>
          {attendances &&
            attendances.map((attendance, index) => {
              return <AttendanceItem key={index} attendance={attendance} />;
            })}
        </Grid>
      </Grid>
    </>
  );
};

export default AttendanceList;
