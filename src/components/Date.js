import React, { useState } from "react";
import moment from "moment";

const DateInput = ({ onChange }) => {
  const [value, setValue] = useState(moment().format("YYYY-MM-DD"));

  const onChangeDate = ({ target }) => {
    console.log(target.value);
    setValue(target.value);
    onChange(target.value);
  };

  return (
    <input
      type="date"
      value={value}
      className="bg-transparent border-b-2 border-white p-2 hover:outline-none"
      onChange={onChangeDate}
    />
  );
};

export default DateInput;
