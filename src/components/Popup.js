import { useState } from "react";
import WheelComponent from "react-wheel-of-prizes";

export default function Popup() {
  const segments = [
    "Better luck ",
    "10% off",
    "5% off",
    "Better luck ",
    "20% off",
    "15% off"
  ];
  const segColors = [
    "black",
    "#60BA97",
    "black",
    "#60BA97",
    "black",
    "#60BA97"
  ];
  const onFinished = (winner) => {
    //console.log(winner);
  };
  return (
    <div className="fixed inset-0 w-1/2 bg-white z-50 m-auto h-4/5">
      <h1>wofhoog</h1>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          buttonText="Start"
          size={200}
          className="absolute top-0 left-0"
        />
      <h2> Spin the wheel and win exiting offers</h2>
    </div>
  );
}
