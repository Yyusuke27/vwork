import React, { useCallback, useState } from "react";
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
import { fetchAsyncGetMyAttendances } from "../attendanceSlice";

const DatePickerArea = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [month, setMonth] = useState(moment().format("M"));

  const workspace = useSelector(selectWorkspace);

  const dispatch = useDispatch();

  const getAttendance = useCallback(
    async (workspace, year, month) => {
      await dispatch(
        fetchAsyncGetMyAttendances({ workspace, query: { year, month } })
      );
    },
    [dispatch]
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
          <Typography variant={"h5"}>{month}月の勤怠情報</Typography>
        </Box>
      </Box>
    </>
  );
};

export default DatePickerArea;
