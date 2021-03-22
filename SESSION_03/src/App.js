import { useState } from "react";
import "./styles.css";

export default function App() {
  const [spacing, setSpacing] = useState(10);
  const [blur, setBlur] = useState(10);
  const [base, setBase] = useState("#bada55"); // lol

  const onChangeSpacing = (event) => {
    setSpacing(event.target.value);
  };

  const onChangeBlur = (event) => {
    setBlur(event.target.value);
  };

  const onChangeBase = (event) => {
    setBase(event.target.value);
  };

  return (
    <div
      style={{
        "--spacing": `${spacing}px`,
        "--blur": `${blur}px`,
        "--base": `${base}`
      }}
    >
      <div
        style={{
          "--spacing": `${spacing}px`,
          "--blur": `${blur}px`,
          "--base": `${base}`
        }}
      />
      <h2>
        Update CSS Variables with <span className="hl">JS</span>
      </h2>
      <div className="controls">
        <label htmlFor="spacing">Spacing:</label>
        <input
          id="spacing"
          type="range"
          name="spacing"
          min="10"
          max="200"
          value={spacing}
          onChange={onChangeSpacing}
        />

        <label htmlFor="blur">Blur:</label>
        <input
          id="blur"
          type="range"
          name="blur"
          min="0"
          max="25"
          value={blur}
          onChange={onChangeBlur}
        />

        <label htmlFor="base">Base Color</label>
        <input
          id="base"
          type="color"
          name="base"
          value={base}
          onChange={onChangeBase}
        />
      </div>

      <img
        src="https://source.unsplash.com/7bwQXzbF6KE/800x500"
        alt="person on mountain"
      />
    </div>
  );
}
