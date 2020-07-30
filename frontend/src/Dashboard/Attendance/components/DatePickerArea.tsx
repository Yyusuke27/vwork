import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerArea = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker date={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default DatePickerArea;
