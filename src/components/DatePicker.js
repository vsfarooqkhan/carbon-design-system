import React from 'react';
import "flatpickr/dist/themes/material_blue.css";

import Flatpickr from "react-flatpickr";
import {DatePicker as DatePickr, DatePickerInput } from 'carbon-components-react';
export const DatePicker = () => {
    const [date, setdate] = React.useState(new Date())
    return(
        <Flatpickr
        data-enable-time
        value={date}
        mode = "range"
        options = {{
            mode : 'range',
        }}
        onChange={date => {
          setdate(date)
        }}
      />
    )
}
export default DatePicker;