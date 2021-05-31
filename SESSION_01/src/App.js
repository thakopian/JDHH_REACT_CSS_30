import { useRef, useState } from "react";
import classNames from "classnames";
import "./styles.css";

export default function App() {
  const [currentKey, setCurrentKey] = useState("");
  const keyData = {
    a: { ref: useRef(), sound: "clap" },
    s: { ref: useRef(), sound: "hihat" },
    d: { ref: useRef(), sound: "kick" },
    f: { ref: useRef(), sound: "openhat" },
    g: { ref: useRef(), sound: "boom" },
    h: { ref: useRef(), sound: "ride" },
    j: { ref: useRef(), sound: "snare" },
    k: { ref: useRef(), sound: "tom" },
    l: { ref: useRef(), sound: "tink" }
  };
  const handleOnKeyDown = (event) => {
    const audioNode = keyData[event.key].ref.current;

    audioNode.currentTime = 0;
    audioNode.play();
    setCurrentKey(event.key);
  };

  return (
    <div className="keys" onKeyDown={handleOnKeyDown} tabIndex="0">
      {Object.entries(keyData).map(([letter, { sound, ref }]) => (
        <div
          key={letter}
          className={classNames("key", {
            playing: currentKey === letter
          })}
          onTransitionEnd={() => setCurrentKey("")}
        >
          <kbd>{letter.toUpperCase()}</kbd>
          <span className="sound">{sound}</span>
          <audio ref={ref} src={`${sound}.wav`}></audio>
        </div>
      ))}
    </div>
  );
}
