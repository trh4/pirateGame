import React, { useEffect, useState } from "react";
// npm run watch:sass
function Sidebar(props) {
  function toggleBackground() {
    let hand = document.querySelector(".sidebar__hand");
    if (props.DragToScroll === true) hand.style.backgroundSize = "0 0";
    else hand.style.backgroundSize = "cover";
  }
  function rollDice() {
    if(props.DragToScroll===true) return;
    const rand = Math.floor(Math.random() * 7);
    // changeCube(rand);
    changeCube(rand);
    setTimeout(() => {
      props.SetcurrentBox(rand);
    }, 2 * 1000);
  }
  function changeCube(num) {
    let cubeRotate = document.querySelector(".cube--rotate");
    switch (num) {
      case 1:
        cubeRotate.classList.add("show-front");
        break;
      case 2:
        cubeRotate.classList.add("show-right");
        break;
      case 3:
        cubeRotate.classList.add("show-back");
        break;
      case 4:
        cubeRotate.classList.add("show-left");
        break;
      case 5:
        cubeRotate.classList.add("show-top");
        break;
      case 6:
        cubeRotate.classList.add("show-bottom");
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    toggleBackground();
  }, [props.DragToScroll, props.CurrentBox]);
  return (
    <nav className="sidebar">
      <figure
        className="sidebar__hand"
        alt="Browse Hand"
        onClick={(e) => {
          props.DragToScroll === false
            ? props.SetDragToScroll(true)
            : props.SetDragToScroll(false);
        }}
      ></figure>
      <button className="sidebar__rollDice" onMouseUp={rollDice}>
        Roll Dice
      </button>
      <div className="cube__scene">
        <div className="cube cube--rotate">
          <div className="cube__face cube__face--front"></div>
          <div className="cube__face cube__face--right"></div>
          <div className="cube__face cube__face--back"></div>
          <div className="cube__face cube__face--left"></div>
          <div className="cube__face cube__face--top"></div>
          <div className="cube__face cube__face--bottom"></div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
