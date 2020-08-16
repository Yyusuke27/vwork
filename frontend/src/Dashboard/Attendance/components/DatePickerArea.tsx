import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import DateFnsUtils from "@date-io/date-fns";
import { ja } from "date-fns/locale";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

const DatePickerArea = () => {
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date());

  return (
    <>
      <Box mt={15}>
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
      </Box>
    </>
  );
};

export default DatePickerArea;
