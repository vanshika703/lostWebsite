import React, { useRef, useState, useLayoutEffect, forwardRef } from "react";

const SpinAndWin = forwardRef(
  ({
    data,
    hideButton,
    time,
    minTime,
    maxTime,
    removeButtonEffect,
    fontSize,
    fontFamily,
    horizantalText,
    handleCheckWinner,
  }) => {
    const [state] = useState({ winnerAngle: 0 });
    useLayoutEffect(() => {
      var wheelCanvas = document.getElementById("wheel");
      if (wheelCanvas && isCanvas(wheelCanvas)) {
        var wheel = wheelCanvas.getContext("2d");
        var wheelX = wheelCanvas.width / 2;
        var wheelY = wheelCanvas.height / 2;
        var wheelRadius = Math.min(wheelX, wheelY);

        drawWheel(data, wheel, wheelX, wheelY, wheelRadius);
      }
    }, []);
    function isCanvas(obj) {
      return obj.tagName === "CANVAS";
    }
    const degToRad = (deg) => {
      return (deg * Math.PI) / 180.0;
    };
    const drawWheel = (list, wheel, wheelX, wheelY, wheelRadius) => {
      var segment = 360 / list.length;

      list.map((el, i) => {
        wheel.save();
        wheel.translate(wheelX, wheelY);
        wheel.rotate(degToRad(segment * i));
        wheel.translate(-wheelX, -wheelY);

        wheel.fillStyle = el[1] ? el[1] : "red";

        wheel.beginPath();
        wheel.moveTo(wheelX, wheelY);
        wheel.arc(
          wheelX,
          wheelY,
          wheelRadius,
          0 - degToRad(90) - degToRad(segment / 2),
          degToRad(segment) - degToRad(90) - degToRad(segment / 2),
          false
        );
        wheel.moveTo(wheelX, wheelY);
        wheel.fill();

        wheel.fillStyle = "black";
        horizantalText
          ? (wheel.textAlign = "start")
          : (wheel.textAlign = "end");
        wheel.font =
          fontSize && fontFamily
            ? `${fontSize}px ${fontFamily}`
            : fontSize
            ? `${fontSize}px sans-serif`
            : fontFamily
            ? `18px ${fontFamily}`
            : "18px sans-serif";
        wheel.transform = "translate(50px, 100px)";
        if (horizantalText) {
          wheel.textAlign = "center";
          wheel.fillText(el[0], wheelX, wheelY / 4);
        } else {
          wheel.rotate(-1.57);
          wheel.fillText(el[0], -20, wheelY + 10);
        }

        wheel.restore();
      });
    };
    const handleSpin = () => {
      let wheelCanvas = document.getElementById("wheel");
      if (wheelCanvas) {
        let transitionTime = time
          ? time
          : minTime && maxTime && minTime > 0 && maxTime > 0
          ? Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime
          : Math.floor(Math.random() * (4 - 3 + 1)) + 3;
        wheelCanvas.style.transition = transitionTime + "s";

        // Replace this TODO
        const random = 1;
        let winner = data[random];

        handleCheckWinner(winner);
        console.log("hi", winner);
        if (!winner) {
          winner = [""];
        }
        let freeSpinGifts = [];
        data.map((item) => {
          freeSpinGifts.push(item[0]);
        });
        let winnerIndex = freeSpinGifts.indexOf(winner[0]);
        console.log("winnerIndex", winnerIndex);
        let offset = state.winnerAngle % 360;
        state.winnerAngle =
          state.winnerAngle +
          2520 -
          (360 * winnerIndex) / freeSpinGifts.length -
          offset;
        let deg = "rotate(" + state.winnerAngle + "deg)";
        wheelCanvas.style.transform = deg;
      }
    };
    return (
      <div>
        <div className="rewards-spin-game">
          <div className="canvas-container">
            <canvas id="wheel" width="450px" height="450px" />
            {!hideButton && (
              <span
                id="spin"
                onClick={() => (removeButtonEffect ? "" : handleSpin())}
              >
                SPIN
              </span>
            )}
          </div>
          <span className="arrow absolute -top-3">
            <svg
              id="arrow"
              stroke="#181818"
              fill="#F3CD35"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="4em"
              width="4em"
              xmlns="http://www.w3.org/2000/svg"
              
            >
              <path className="shadow-lg" d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
            </svg>
          </span>
        </div>
      </div>
    );
  }
);

export default SpinAndWin;
