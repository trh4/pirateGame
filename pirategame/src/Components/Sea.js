import Pirate from "./Pirate";
import { useRef, useEffect } from "react";

// npm run watch:sass
function Sea(props) {
  let pos = useRef({ top: 0, left: 0, x: 0, y: 0 });
  let sea = useRef();
  const mouseDownHandler = function (e) {
    pos.current = {
      // The current scroll
      left: window.pageXOffset,
      top: window.pageYOffset,
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
    window.scrollTo({
      top: pos.current.top - dy,
      left: pos.current.left - dx,
      behavior: "smooth",
    });
  };
  const mouseUpHandler = function () {
    sea.current.removeEventListener("mousemove", mouseMoveHandler);
    sea.current.removeEventListener("mouseup", mouseUpHandler);
    // sea.current.style.removeProperty("user-select");
  };
  useEffect(() => {
    sea.current = document.querySelector(".section-sea");
    sea.current.addEventListener("mousedown", mouseDownHandler);
  });

  return (
    <section
      className="section-sea"
    >
      <Pirate CurrentBox={props.CurrentBox} />
    </section>
  );
}

export default Sea;
