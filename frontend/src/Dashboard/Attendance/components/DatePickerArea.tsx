import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  boxStyle: {
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
    <>
      <Box mt={15}>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item>
            <DatePicker
              selected={date}
              onChange={() => setDate(date)}
              onCalendarClose={handleCalendarClose}
              onCalendarOpen={handleCalendarOpen}
              className={classes.boxStyle}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DatePickerArea;
