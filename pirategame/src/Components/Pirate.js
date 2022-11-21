import React, { useEffect, useRef } from "react";

function Pirate(props) {
  let pirate = useRef();
  useEffect(() => {
    console.log("pirate render");
    pirate.current = document.querySelector(".pirate");
    // code to run after render goes here
    movePirate();
  },[props.CurrentBox]);
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
      console.log('cleard')
    }, sec * 1000);
  }
  async function movePirate() {
    if (props.CurrentBox >= 2) {
      followPirate(1.5, "center", "start");
      pirate.current.classList.add("move-to-2");
    }
    setTimeout(() => {
      if (props.CurrentBox >= 3) {
        pirate.current.classList.add("move-to-3");
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

  return (
    <img src={require("../img/Pirate.png")} alt="pirate" className="pirate" />
  );
}

export default Pirate;
