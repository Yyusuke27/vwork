import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  boxstyle: {
    height: 25,
    textAlign: "center",
    fontSize: 20,
  },
});

const DatePickerArea = () => {
  const [date, setDate] = useState(new Date());
  const classes = useStyles();

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="center"
      style={{ marginTop: 100 }}
    >
      <Grid item>
        <DatePicker
          selected={date}
          onChange={() => setDate(date)}
          onCalendarClose={handleCalendarClose}
          onCalendarOpen={handleCalendarOpen}
          className={classes.boxstyle}
        />
      </Grid>
    </Grid>
  );
};

export default DatePickerArea;
