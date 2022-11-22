// npm run watch:sass
import React, { useEffect, useState } from "react";
import Sea from "./Sea";
import Sidebar from "./Sidebar";

function App() {
  let [dragToScroll, setDragToScroll] = useState(false);
  let [currentBox, setcurrentBox] = useState(0);
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
      setcurrentBox(3);
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
  function name(params) {}
  return (
    <div className="app" tabIndex={-1} onKeyDown={handleKeyDown}>
      <Sidebar
        SetcurrentBox={setcurrentBox}
        CurrentBox={currentBox}
        SetDragToScroll={setDragToScroll}
        DragToScroll={dragToScroll}
      />
      <Sea CurrentBox={currentBox} DragToScroll={dragToScroll} />
      
      <aside class="popup" id="popup">
        <div class="popup__content">
          <div class="popup__right">
            <a href="." class="popup__close">
              &times;
            </a>
            <h2 class="heading-secondery u-margin-bottom-small">
              Start booking now
            </h2>
            <h3 class="heading-tertiary u-margin-bottom-small">
              Important &ndash; Please read these terms before booking
            </h3>
            <p class="popup__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              sed risus pretium quam. Aliquam sem et tortor consequat id.
              Volutpat odio facilisis mauris sit amet massa vitae. Mi bibendum
              neque egestas congue. Placerat orci nulla pellentesque dignissim
              enim sit. Vitae semper quis lectus nulla at volutpat diam ut
              venenatis. Malesuada pellentesque elit eget gravida cum sociis
              natoque penatibus et. Proin fermentum leo vel orci porta non
              pulvinar neque laoreet. Gravida neque convallis a cras semper.
              Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
              vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam
              libero justo laoreet sit. Amet massa vitae tortor condimentum
              lacinia quis vel eros donec. Sit amet facilisis magna etiam.
              Imperdiet sed euismod nisi porta.
            </p>
            <a href="#popup" class="btn btn--green">
              Book now
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
