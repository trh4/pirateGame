import React, { useEffect } from "react";
// npm run watch:sass
function Sidebar(props) {
  function toggleBackground() {
    let hand = document.querySelector(".sidebar__hand");
    if (props.DragToScroll === true) hand.style.backgroundSize = "0 0";
    else hand.style.backgroundSize = "cover";
  }
  function rollDice() {
    document.querySelector(".sidebar__rollDice").disabled = true;
    if (props.DragToScroll === true) return;
    fetch(
      `https://pirategame-backend.herokuapp.com/dice?email=${props.Email}&name=${props.Name}`
    )
      .then((response) => response.json())
      .then((data) => {
        changeCube(data.newdice);
        setTimeout(() => {
          props.SetcurrentBox(data.newdice);
        }, 1 * 1000);
      });
  }
  function changeCube(num) {
    let cubeRotate = document.querySelector(".cube--rotate");
    switch (num) {
      case 1:
        cubeRotate.classList.add("show-front");
        break;
      case 2:
      case 7:
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
    if (props.CurrentBox === 0) {
      document.querySelector(".cube--rotate").className = "cube cube--rotate";
    }
    toggleBackground();
  }, [props.DragToScroll, props.CurrentBox]);
  return (
    <nav className="sidebar">
      <figure
        className="sidebar__hand"
        alt="Browse Hand"
        onClick={(e) => {
          if ((document.body.style.pointer = "coarse"))
            document.body.requestFullscreen();
          else {
            props.DragToScroll === false
              ? props.SetDragToScroll(true)
              : props.SetDragToScroll(false);
          }
        }}
      ></figure>
      <button className="sidebar__rollDice" onClick={rollDice}>
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
