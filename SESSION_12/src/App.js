import { useState, useEffect } from "react";
import "./styles.css";

const useKeyLogger = () => {
  const [keyCache, setKeyCache] = useState([]);

  useEffect(() => {
    const addKeyToCache = (event) => {
      setKeyCache(keyCache.concat(event.key));
    };

    window.addEventListener("keyup", addKeyToCache);

    return () => window.removeEventListener("keyup", addKeyToCache);
  }, [keyCache]);

  return keyCache;
};

const useKonamiCode = () => {
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
    "Enter"
  ];
  const keyCache = useKeyLogger();

  return keyCache.slice(-konamiCode.length).join("") === konamiCode.join("");
};

export default function App() {
  const hasKonamiCodeBeenEntered = useKonamiCode();

  return (
    <div className="App">
      {!hasKonamiCodeBeenEntered && <h1>Enter the secret code</h1>}
      <img
        className={hasKonamiCodeBeenEntered ? "open" : ""}
        src="https://i.giphy.com/media/dTxOCCvQOhRXa/source.gif"
        alt="Snoop Thug Life"
      />
    </div>
  );
}
