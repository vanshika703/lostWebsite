import React, { useState } from "react";

const DateInput = ({ onChange, defaultValue }) => {
  const [value, setValue] = useState();

  const onChangeDate = ({ target }) => {
    console.log(target.value);
    setValue(target.value);
    onChange(target.value);
  };

  return (
    <input
      type="date"
      min={new Date().toISOString().split("T")[0]}
      defaultValue={defaultValue}
      value={value}
      className="bg-transparent border-b-2 border-white py-2 hover:outline-none w-full"
      onChange={onChangeDate}
      placeholder="dd/mm/yyyy"
    />
  );
};

export default DateInput;
