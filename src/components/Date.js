import React, { useState } from "react";

const DateInput = ({ onChange, defaultValue, min }) => {
  const [value, setValue] = useState();

  const onChangeDate = ({ target }) => {
    console.log(target.value);
    setValue(target.value);
    onChange(target.value);
  };

  return (
    <input
      type="date"
      defaultValue={defaultValue}
      value={value}
      min={min}
      className="bg-transparent border-b-2 border-white py-2 hover:outline-none w-full"
      onChange={onChangeDate}
      placeholder="dd/mm/yyyy"
    />
  );
};

export default DateInput;
