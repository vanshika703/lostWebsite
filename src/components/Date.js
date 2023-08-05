import React, { useState } from "react";

const DateInput = ({ onChange }) => {
  const [value, setValue] = useState();

  const onChangeDate = ({ target }) => {
    console.log(target.value);
    setValue(target.value);
    onChange(target.value);
  };

  return (
    <input
      type="date"
      value={value}
      className="bg-transparent border-b-2 border-white py-2 hover:outline-none"
      onChange={onChangeDate}
      placeholder="Date"
      //   onfocus="(this.type='date')"
      //   onblur="(this.type='text')"
    />
  );
};

export default DateInput;
