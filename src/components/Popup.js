import { useState, useEffect, useRef } from "react";
import SpinAndWin from "./Spin";
// import SpinAndWin from "react-spin-game";
// import "react-spin-game/dist/index.css";

const Popup = () => {
  const freeSpinGifts = [
    ["10% off", "#116b89"],
    ["Try Again", "#5897AC"],
    ["15% off", "#116b89"],
    ["Better Luck Next Time", "#5897AC"],
    ["Free Beer", "#116b89"],
    ["So Close", "#5897AC"],
  ];

  const ref = useRef(null);

  const [isPopupOpen, setIsPopupOpen] = useState(true);

  useEffect(() => {
    console.log(ref);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  }

  const handleCheckWinner = (winner) => {
    console.log("eheheh, winner is", winner);
  };
  return (
    <>
      
        {isPopupOpen && (<div className="wheel-div fixed inset-0 m-auto py-20 bg-white z-50 w-3/4 h-4/5 flex flex-col items-center justify-center rounded-md">
          <button
            className="absolute top-5 right-8"
            onClick={handleClosePopup}
          >
            X
          </button>
          <p className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
            Spin to win!
          </p>
          <SpinAndWin
            data={freeSpinGifts}
            handleCheckWinner={handleCheckWinner}
          />
          <p>prize</p>
        </div>)}
      
    </>
  );
};

export default Popup;
