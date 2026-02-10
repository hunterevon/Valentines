import React, { useRef, useState } from "react";
import { randomViewportPosition } from "./interaction";

export default function App() {
  const yesRef = useRef(null);
  const noRef = useRef(null);
  const [yesPos, setYesPos] = useState(null); // {left, top}
  const [clickCount, setClickCount] = useState(0);
  const [noFull, setNoFull] = useState(false);

  function handleYesClick(e) {
    // move the YES button to a random position
    const btn = yesRef.current;
    const noBtn = noRef.current;
    const rect = btn ? btn.getBoundingClientRect() : { width: 100, height: 40 };
    const pos = randomViewportPosition(
      Math.ceil(rect.width),
      Math.ceil(rect.height),
    );
    setYesPos(pos);

    // increase the growth counter for NO button
    setClickCount((prev) => {
      const next = prev + 1;
      // check if NO should grow to the target (about 80% of viewport)
      if (noBtn) {
        const noRect = noBtn.getBoundingClientRect();
        // slower growth per click
        const scale = 1 + next * 0.15;
        const effective = noRect.width * scale;
        const maxDim = Math.max(window.innerWidth, window.innerHeight);
        // target is 80% of the larger viewport dimension
        if (effective >= 0.8 * maxDim) {
          setNoFull(true);
        }
      }
      return next;
    });
  }

  function handleNoClick() {
    window.location.assign("/no.html");
  }

  const yesStyle = yesPos
    ? {
        position: "fixed",
        left: yesPos.left + "px",
        top: yesPos.top + "px",
        zIndex: 1000,
      }
    : {};

  const noScale = 1 + clickCount * 0.15;

  return (
    <div className="app">
      <header className="header">
        <h1>Will you be my Valentine?</h1>
      </header>
      <main className="main">
        <img src="/heath.jpeg" alt="photo" className="heath" />
        <div className="maindiv">
          <div className="buttons">
            <button
              ref={yesRef}
              className="yes"
              onClick={handleYesClick}
              style={yesStyle}
            >
              YES
            </button>
            <button
              ref={noRef}
              className={"no" + (noFull ? " fullscreen" : "")}
              onClick={handleNoClick}
              style={
                noFull
                  ? {}
                  : {
                      transform: `scale(${noScale})`,
                      transition: "transform 300ms ease",
                    }
              }
            >
              NO
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
