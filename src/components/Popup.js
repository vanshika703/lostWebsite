import { useEffect, useRef } from "react";
import SpinAndWin from "./Spin";
// import SpinAndWin from "react-spin-game";
// import "react-spin-game/dist/index.css";
const Popup = () => {
  const freeSpinGifts = [
    ["test1", "red"],
    ["test2", "black"],
    ["test3", "#808080"],
    ["test4", "blue"],
    ["test5", "gray"],
    ["test6", "blue"],
  ];

  const ref = useRef(null);

  useEffect(() => {
    console.log(ref);
  }, []);

  const handleCheckWinner = (winner) => {
    console.log("eheheh, winner is", winner);
  };
  return (
    <div className="py-20 bg-white absolute z-50 w-screen h-screen flex items-center justify-center">
      <SpinAndWin data={freeSpinGifts} handleCheckWinner={handleCheckWinner} />
    </div>
  );
};

export default Popup;
