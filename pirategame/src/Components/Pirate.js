import React, { useEffect, useState, useRef } from "react";

function Pirate(props) {
  let pirate = useRef();
  useEffect(() => {
    pirate.current = document.querySelector(".pirate");
    // code to run after render goes here
    movePirate();
  });
  function followPirate(sec, blockVal, inlineVal) {
    let centerPirate = setInterval(() => {
      pirate.current.scrollIntoView({
        behavior: "smooth",
        block: blockVal,
        inline: inlineVal,
      });
    }, 0);
    setTimeout(() => {
      clearInterval(centerPirate);
    }, sec * 1000);
  }
  function movePirate() {
    if (props.CurrentBox >= 2) {
      followPirate(1.5, "center", "start");
      pirate.current.classList.add("move-to-2");
    }
    setTimeout(() => {
      if (props.CurrentBox >= 3) {
        moveTo3();
        if (props.CurrentBox >= 4) {
          setTimeout(() => {
            followPirate(1.5, "center", "end");
            pirate.current.classList.add("move-to-4");
            if (props.CurrentBox >= 5) {
              setTimeout(() => {
                followPirate(1.5, "center", "end");
                pirate.current.classList.add("move-to-5");
                if (props.CurrentBox === 6) {
                  setTimeout(() => {
                    followPirate(1.5, "center", "center");
                    pirate.current.classList.add("move-to-6");
                    
                  }, 1500);
                }
              }, 1500);
            }
          }, 1500);
        }
      }
    }, 1500);
  }
  // const wait = (delay, ...args) => new Promise(resolve => setTimeout(resolve, delay, ...args));
  function moveTo2() {}
  function moveTo3() {
    // followPirate(3,'end','nearest');
    pirate.current.classList.add("move-to-3");
  }

  return (
    <img
      src={require("../img/Pirate.png")}
      alt="pirate"
      className="pirate"
      onClick={moveTo2}
    />
  );
}

export default Pirate;
