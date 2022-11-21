import Pirate from "./Pirate";
import { useRef, useEffect } from "react";



// npm run watch:sass
function Sea(props) {
  let pos = useRef({ top: 0, left: 0, x: 0, y: 0 });
  let sea = useRef(document.querySelector(".section-sea"));
  useEffect(() => {
    const clickEvent = new Event("touchmove", { bubbles: true });
    window.dispatchEvent(clickEvent);
    // code to run after render goes here
    sea.current = document.querySelector(".section-sea");
    // document.addEventListener("mousedown", mouseDownHandler);
  });
  const mouseDownHandler = function (e) {
    sea.current.style.cursor = "grabbing";
    sea.current.style.userSelect = "none";
    pos.current = {
      // The current scroll
      left: sea.current.scrollLeft,
      top: sea.current.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };
    sea.current.addEventListener("mousemove", mouseMoveHandler);
    sea.current.addEventListener("mouseup", mouseUpHandler);
  };
  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.current.x;
    const dy = e.clientY - pos.current.y;

    // Scroll the element
    sea.current.scrollTop = pos.current.top - dy;
    sea.current.scrollLeft = pos.current.left - dx;
  };
  const mouseUpHandler = function () {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);

    sea.current.style.cursor = "grab";
    sea.current.style.removeProperty("user-select");
  };
  return (
    <section className="section-sea">
      <Pirate CurrentBox={props.CurrentBox} />
    </section>
  );
}

export default Sea;
