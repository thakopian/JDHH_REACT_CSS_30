import { useState } from "react";
import sortBy from "lodash/sortBy";
import Switch from "react-switch";
import "./styles.css";

export default function App() {
  const [shouldDisplaySorted, setShouldDisplaySorted] = useState(true);
  const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog"
  ];
  const strip = (bandName, replacer) =>
    bandName.replace(/^(a|the|an)\s+/i, replacer);
  const basicStrip = (bandName) => strip(bandName, "");
  const stripWithParens = (bandName) =>
    strip(bandName, (match) => `(${match.trim()}) `);
  const bandsToDisplay = shouldDisplaySorted
    ? sortBy(bands, basicStrip).map(stripWithParens)
    : bands;

  return (
    <div>
      <div className="container">
        <label className="container">
          <span style={{ marginRight: 8 }}>Display sorted </span>
          <Switch
            onChange={setShouldDisplaySorted}
            checked={shouldDisplaySorted}
          />
        </label>
      </div>
      <br />
      <div className="container">
        <ul id="bands">
          {bandsToDisplay.map((band) => (
            <li key={band}>{band}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
