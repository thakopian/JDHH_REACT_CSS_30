import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [now, setNow] = useState(new Date());
  const angleOffset = 90;
  const secondHandAngle = now.getSeconds() * 6 + angleOffset;
  const minutes = now.getMinutes();
  const minuteHandAngle = minutes * 6 + angleOffset;
  const hourHandAngle = now.getHours() * 30 + angleOffset + minutes / 2;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <div className="clock-face">
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hourHandAngle}deg)` }}
        ></div>
        <div
          className="hand min-hand"
          style={{ transform: `rotate(${minuteHandAngle}deg)` }}
        ></div>
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${secondHandAngle}deg)` }}
        ></div>
      </div>
    </div>
  );
}
