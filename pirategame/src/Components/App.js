// npm run watch:sass
// adb reverse tcp:3000 tcp:3000
import React, { useEffect, useState, useRef } from "react";
import Sea from "./Sea";
import Sidebar from "./Sidebar";
import Popup from "./Popup";

function App() {
  let [dragToScroll, setDragToScroll] = useState(false);
  let [currentBox, setcurrentBox] = useState(-1);
  let [email, setEmail] = useState();
  let [name, setName] = useState();
  let [joke, setJoke] = useState();
  const width = useRef(100);
  let centerMap = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  function handleKeyDown(e) {
    if (e.key === "+") {
      if (width.current >= 200) return;
      // console.log("User pressed: ",document.body.style.width);
      width.current = width.current + 10;
      document.body.style.width = width.current.toString() + "%";
      centerMap();
    }
    if (e.key === "-") {
      if (width.current <= 70) return;
      width.current = width.current - 10;
      document.body.style.width = width.current.toString() + "%";
      centerMap();
    }
    if (e.key === "0") {
      width.current = 100;
      document.body.style.width = 100 + "%";
      centerMap();
    }
    if (e.key === "q" || e.key === "Q") {
      return;
      document.addEventListener("mousemove", logKey);
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

  useEffect(() => {
    if (currentBox === 0) centerMap();
    if (currentBox === 5) {
      fetch("https://pirategame-backend.herokuapp.com/joke")
        .then((response) => response.json())
        .then((data) => {
          setJoke(data.newjoke);
        });
    } else setJoke("");
  }, [currentBox]);
  return (
    <main className="app" tabIndex={-1} onKeyDown={handleKeyDown}>
      <Sidebar
        SetcurrentBox={setcurrentBox}
        CurrentBox={currentBox}
        SetDragToScroll={setDragToScroll}
        DragToScroll={dragToScroll}
        Email={email}
        Name={name}
      />
      <Sea CurrentBox={currentBox} DragToScroll={dragToScroll} />
      <Popup
        CurrentBox={currentBox}
        SetcurrentBox={setcurrentBox}
        SetEmail={setEmail}
        SetName={setName}
        Joke={joke}
      />
    </main>
  );
}

export default App;
