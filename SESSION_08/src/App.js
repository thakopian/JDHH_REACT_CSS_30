import { useRef, useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const canvasRef = useRef();
  const ctx = useRef();
  const [isDrawing, setIsDrawing] = useState(false);
  const startDrawing = ({ nativeEvent }) => {
    ctx.current.beginPath();
    ctx.current.moveTo(nativeEvent.offsetX, nativeEvent.offsetY);
    setIsDrawing(true);
  };
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }

    ctx.current.lineTo(nativeEvent.offsetX, nativeEvent.offsetY);
    ctx.current.stroke();
  };
  const finishDrawing = () => {
    ctx.current.closePath();
    setIsDrawing(false);
  };
  const clearCanvas = () => {
    ctx.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };
  const changeColor = (e) => {
    ctx.current.strokeStyle = e.target.value;
  };

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");
    ctx.current.lineJoin = "round";
    ctx.current.lineCap = "round";
    ctx.current.lineWidth = 5;
  }, []);

  return (
    <div className="App">
      <h1>Fun With HTML5 Canvas</h1>
      <div>
        <label>
          <input type="color" onChange={changeColor} />
          &nbsp; change the color
        </label>
      </div>
      <br />
      <div>
        <button onClick={clearCanvas}>Clear Canvas</button>
      </div>
      <br />
      <canvas
        ref={canvasRef}
        width="600px"
        height="600px"
        style={{ border: "1px solid" }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={finishDrawing}
        onMouseOut={finishDrawing}
      />
    </div>
  );
}
