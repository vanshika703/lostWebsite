import { useState, useEffect, useRef } from "react";
import SpinAndWin from "./Spin";
// import SpinAndWin from "react-spin-game";
// import "react-spin-game/dist/index.css";
import wheelimg from "../img/wheel.png";

const Popup = () => {
  const freeSpinGifts = [
    ["10% off on t-shirt", "#BA81FF"],
    ["Try Again", "#4F67AD "],
    ["Free Lost Love book", "#E54846 "],
    ["Better Luck Next Time", "#FFCF3C "],
    ["1 free beer", "#B2FF9F "],
    ["So Close", "#FF5E80 "],
    ["20% off on Yoga", "#6FF0EA "],
  ];

  const ref = useRef(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [prize, setPrize] = useState(null);

  useEffect(() => {
    console.log(ref);
  }, []);

  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleCheckWinner = (winner) => {
    setPrize(winner);
    console.log("eheheh, winner is", winner);
  };
  return (
    <>
      <div
        className="wheel-button fixed top-[40%] right-0 w-10 h-auto text-white bg-[#0a56a8] z-[100] cursor-pointer flex flex-col justify-center gap-1 items-center rounded shadow-md  "
        onClick={handleTogglePopup}
      >
        <img src={wheelimg} alt="wheel" className="rounded m-1" />
        <p className="text-[#F3CD35] vertical z-[110] p-2 font-medium">
          Try your luck
        </p>
      </div>
      {isPopupOpen && (
        <>
          <div className="wheel-div fixed right-0 top-0 z-[100] m-auto py-20 bg-white w-full sm:w-1/3 h-full flex flex-col items-center justify-center rounded-md">
            <button
              className="absolute top-5 right-8 text-[#F3CD35]"
              onClick={handleTogglePopup}
            >
              X
            </button>
            <p className="text-3xl font-playfair font-semibold py-4 text-[#F3CD35]">
              Spin to win!
            </p>
            <SpinAndWin
              data={freeSpinGifts}
              handleCheckWinner={handleCheckWinner}
            />
            <p className="text-[#F3CD35]">
              {prize && <span>Your prize is : {prize}</span>}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Popup;
