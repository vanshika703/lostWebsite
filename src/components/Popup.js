import { useState } from "react";
import WheelComponent from "react-wheel-of-prizes";

export default function Popup() {
  const segments = [
    "Better luck ",
    "10% off",
    "5% off",
    "Better luck ",
    "20% off",
    "15% off",
  ];
  const segColors = [
    "black",
    "#60BA97",
    "black",
    "#60BA97",
    "black",
    "#60BA97",
  ];
  const onFinished = (winner) => {
    //console.log(winner);
  };
  return (
    <div className="fixed inset-0 bg-white z-50 w-1/2 h-3/4 m-auto flex flex-col justify-center items-center">
      <h1>wofhoog</h1>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        buttonText="Start"
        size={200}
      />
      <h2> Spin the wheel and win exiting offers</h2>
    </div>
  );
}
