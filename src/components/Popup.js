import { useState, useEffect, useRef } from "react";
import SpinAndWin from "./Spin";
// import SpinAndWin from "react-spin-game";
// import "react-spin-game/dist/index.css";

const Popup = () => {
  const freeSpinGifts = [
    ["10% off on t-shirt", "#BA81FF"],
    ["Try Again", "#4F67AD "],
    ["Free Lost Love book", "#E54846 "],
    ["Free Beer", "#FFCF3C "],
    ["1 free beer", "#B2FF9F "],
    ["So Close", "#FF5E80 "],
    ["20% off on Yoga", "#6FF0EA "],
  ];

  const ref = useRef(null);

  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [prize, setPrize] = useState(null);

  useEffect(() => {
    console.log(ref);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleCheckWinner = (winner) => {
    setPrize(winner);
    console.log("eheheh, winner is", winner);
  };
  return (
    <>
      {isPopupOpen && (
        <div className="wheel-div fixed right-0 top-0 z-[100] m-auto py-20 bg-white w-1/3 h-full flex flex-col items-center justify-center rounded-md">
          <button className="absolute top-5 right-8" onClick={handleClosePopup}>
            X
          </button>
          <p className="text-3xl font-playfair font-semibold py-4 text-[#F3CD35]">
            Spin to win!
          </p>
          <SpinAndWin
            data={freeSpinGifts}
            handleCheckWinner={handleCheckWinner}
          />
          <p className="text-[#F3CD35]">{prize && <span>Your prize is : {prize}</span>}</p>
        </div>
      )}
    </>
  );
};

export default Popup;
