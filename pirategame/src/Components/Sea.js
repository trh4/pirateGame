import Pirate from "./Pirate";
import { useRef, useEffect } from "react";

// npm run watch:sass
function Sea(props) {
  let pos = useRef({ top: 0, left: 0, x: 0, y: 0 });
  let sea = useRef();

  const mouseDownHandler = function (e) {
    if (props.DragToScroll === false) return;
    sea.current.style.userSelect = "none";
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
    if (props.DragToScroll === false) return;
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
    if (props.DragToScroll === false) return;
    sea.current.removeEventListener("mousemove", mouseMoveHandler);
    sea.current.removeEventListener("mouseup", mouseUpHandler);
    sea.current.style.removeProperty("user-select");
  };
  useEffect(() => {
    sea.current = document.querySelector(".section-sea");
    if(props.DragToScroll===true)sea.current.style.cursor = 'grab';
    else sea.current.style.cursor = 'default';
  }, [props.DragToScroll]);

  return (
    <section className="section-sea" onMouseDown={mouseDownHandler}>
      <Pirate CurrentBox={props.CurrentBox} />
    </section>
  );
}

export default Sea;
