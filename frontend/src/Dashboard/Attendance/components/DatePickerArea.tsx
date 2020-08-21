import React, { FC, useCallback, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import DateFnsUtils from "@date-io/date-fns";
import { ja } from "date-fns/locale";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { selectWorkspace } from "../../../Auth/authSlice";
import {
  fetchAsyncGetMemberAttendance,
  fetchAsyncGetMyAttendances,
} from "../attendanceSlice";

interface DatePickerProps {
  userId?: string;
}

const DatePickerArea: FC<DatePickerProps> = ({ userId }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [month, setMonth] = useState(moment().format("M"));

  const workspace = useSelector(selectWorkspace);

  const dispatch = useDispatch();

  const path = window.location.pathname;

  const getAttendance = useCallback(
    async (workspace, year, month) => {
      if (path.includes("members")) {
        await dispatch(
          fetchAsyncGetMemberAttendance({
            userId: userId ? userId : "",
            workspace,
            query: { year, month },
          })
        );
      } else {
        await dispatch(
          fetchAsyncGetMyAttendances({ workspace, query: { year, month } })
        );
      }
    },
    [dispatch, userId, path]
  );

  const handleDateChange = (date: Date | null) => {
    const querYear = moment(date).format("YYYY");
    const queryMonth = moment(date).format("MM");
    setMonth(queryMonth);

    const updatedDate = moment(`${querYear}-${queryMonth}-01`).toDate();
    setSelectedDate(updatedDate);

    getAttendance(workspace, querYear, queryMonth);
  };

  return (
    <>
      <Box mt={10}>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ja}>
              <DatePicker
                openTo="month"
                views={["year", "month"]}
                label="絞り込む"
                value={selectedDate}
                onChange={handleDateChange}
                format="yyyy年MM月"
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Box borderBottom={1}>
          <Typography variant={"h5"}>{Number(month)}月の勤怠情報</Typography>
        </Box>
      </Box>
    </>
  );
};

export default DatePickerArea;
