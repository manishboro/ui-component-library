import React, { useState } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Box } from '@material-ui/core';
import "./index.scss";

const EmDateRangePicker = ({ alignment }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <Box className={`em-dateRangePicker ${alignment}`}>
      <DateRangePicker
        startDate={startDate}
        startDateId="s_id"
        endDate={endDate}
        endDateId="e_id"
        onDatesChange={({ startDate, endDate }) => { setStartDate(startDate); setEndDate(endDate); }}
        focusedInput={focusedInput}
        onFocusChange={e => setFocusedInput(e)}
        displayFormat="DD/MM/YYYY"
        isOutsideRange={() => false}
      />
    </Box>
  );
};

export default EmDateRangePicker;