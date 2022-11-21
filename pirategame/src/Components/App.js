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
    if (e.key === "q" || e.key === "Q") {
      document.addEventListener('mousemove', logKey)
    }
  }

  function logKey(e) {
    console.log(`
      Screen X/Y: ${e.screenX}, ${e.screenY}
      Window scr: ${window.screen.width}, ${window.screen.height}
      Window inn: ${window.innerWidth}, ${window.innerHeight}
      Client X/Y: ${e.clientX}, ${e.clientY}
      page X/Y:   ${e.pageX}, ${e.pageY}
      offset X/Y: ${e.offsetX}, ${e.offsetY}
      offset X/Y: ${window.pageXOffset}, ${window.pageYOffset}
      `);
    // window.scrollTo({
    //   top: window.innerHeight * 1 - e.clientY,
    //   left: window.innerWidth * 1 - e.clientX,
    //   behavior: "smooth",
    // });
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
