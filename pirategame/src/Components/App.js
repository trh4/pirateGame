// npm run watch:sass
import React, { useEffect, useState } from "react";
import Sea from "./Sea";
import Sidebar from "./Sidebar";

function App() {
  let [dragToScroll, setDragToScroll] = useState(false);
  let [currentBox, setcurrentBox] = useState(0);
  useEffect(() => {
    // code to run after render goes here
    centerMap();
    document.addEventListener("mousemove", logKey);
  }, []);
  useEffect(() => {
    // code to run after render goes here
  });

  let centerMap = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  function handleKeyDown(e) {
    // console.log('User pressed: ', e.key);
    if (e.key === "c" || e.key === "C") {
      console.log("User pressed: ", e.key, "centering map");
      centerMap();
    }
    if (e.key === "e" || e.key === "E") {
      console.log("User pressed: ", e.key, "centering map");
      setcurrentBox(6);
    }
  }

  function logKey(e) {
    console.log(`
      Screen X/Y: ${e.screenX}, ${e.screenY}
      Client X/Y: ${e.clientX}, ${e.clientY}
      Client X/Y: ${e.clientWidth}, ${e.clientHeight}
      page X/Y:   ${e.pageX}, ${e.pageY}
      offset X/Y: ${e.offsetX}, ${e.offsetY}
      `);
    console.log(VisualViewport.window);
    window.scrollTo({ top: e.clientY, left: e.clientX, behavior: "smooth" });
  }
  return (
    <div
      className="app"
      // onClick={scrolll}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    >
      <Sidebar
        SetcurrentBox={setcurrentBox}
        SetDragToScroll={setDragToScroll}
      />
      <Sea CurrentBox={currentBox} DragToScroll={dragToScroll} />
    </div>
  );
}

export default App;
