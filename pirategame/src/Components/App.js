// npm run watch:sass
// adb reverse tcp:4000 tcp:4000
// document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });
import React, { useEffect, useState } from "react";
import Sea from "./Sea";
import Sidebar from "./Sidebar";
import Popup from "./Popup";

function App() {
  let [dragToScroll, setDragToScroll] = useState(false);
  let [currentBox, setcurrentBox] = useState(-1);
  let [email, setEmail] = useState();
  let [name, setName] = useState();
  let [joke, setJoke] = useState();
  let centerMap = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  function handleKeyDown(e) {
    return;
    if (e.key === "c" || e.key === "C") {
      console.log("User pressed: ", e.key, "centering map");
      centerMap();
    }
    if (e.key === "e" || e.key === "E") {
      console.log("User pressed: ", e.key, "centering map");
      setcurrentBox(6);
    }
    if (e.key === "q" || e.key === "Q") {
      document.addEventListener("mousemove", logKey);
    }
    if (e.key === "s" || e.key === "S") {
      setDragToScroll(true);
    }
    if (e.key === "X" || e.key === "x") {
      setDragToScroll(false);
    }
    if (e.key === "p" || e.key === "P") {
      document.querySelector(".popup").classList.add("popup--show");
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
      // console.log("got new joke!");
      fetch("https://pirategame-backend.herokuapp.com/joke")
        .then((response) => response.json())
        .then((data) => {
          console.log("joke is:", data.newjoke);
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
