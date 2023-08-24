import React, { useState } from "react";

const DateInput = ({ onChange }) => {
  const [value, setValue] = useState("select date");

  const onChangeDate = ({ target }) => {
    console.log(target.value);
    setValue(target.value);
    onChange(target.value);
  };

  return (
    <input
      type="date"
      min={new Date().toISOString().split("T")[0]}
      value={value}
      className="text-black bg-transparent"
      onChange={onChangeDate}
      placeholder="Date"
    />
  );
};

export default DateInput;
