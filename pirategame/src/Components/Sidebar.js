import React, { useEffect } from "react";
// npm run watch:sass
function Sidebar(props) {
  function toggleBackground() {
    let hand = document.querySelector(".sidebar__hand--img");
    if (props.DragToScroll === true) hand.style.backgroundSize = "0 0";
    else hand.style.backgroundSize = "cover";
  }
  useEffect(() => {
    toggleBackground();
  }, [props.DragToScroll]);
  return (
    <nav className="sidebar">
      <figure
        className="sidebar__hand--img"
        alt="Browse Hand"
        onClick={(e) => {
          props.DragToScroll === false
            ? props.SetDragToScroll(true)
            : props.SetDragToScroll(false);
        }}
      ></figure>
      <button className="sidebar__rollDice">Roll Dice</button>
      <div className="sidebar__cube"></div>
    </nav>
  );
}

export default Sidebar;
