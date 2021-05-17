import "./styles.css";
import { useState, useRef } from "react";

export default function App() {
  const videoRef = useRef();
  const [isPaused, setIsPaused] = useState(true);
  const [percentVidProgress, setPercentVidProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [count, setCount] = useState(0);
  console.log({ count });

  const toggleVideo = () => {
    if (isPaused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }

    setCount(count + 1);
    setIsPaused(!isPaused);
  };

  const handleProgress = () => {
    setPercentVidProgress(
      (videoRef.current.currentTime / videoRef.current.duration) * 100
    );
  };
  const handleVolumeChange = (e) => {
    const updatedVolume = e.target.value;
    setVolume(updatedVolume);
    videoRef.current.volume = updatedVolume;
  };

  return (
    <div className="player">
      <video
        ref={videoRef}
        className="player__video viewer"
        src="https://samplelib.com/lib/preview/mp4/sample-15s.mp4"
        onClick={toggleVideo}
        onTimeUpdate={handleProgress}
      ></video>

      <div className="player__controls">
        <div className="progress">
          <div
            className="progress__filled"
            style={{ flexBasis: percentVidProgress }}
          ></div>
        </div>
        <button
          onClick={toggleVideo}
          className="player__button toggle"
          title="Toggle Play"
        >
          {isPaused ? "►" : "❚ ❚"}
        </button>
        <input
          type="range"
          name="volume"
          className="player__slider"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={handleVolumeChange}
        />
        <input
          type="range"
          name="playbackRate"
          className="player__slider"
          min="0.5"
          max="2"
          step="0.1"
          value="1"
        />
        <button className="player__button">« 10s</button>
        <button className="player__button">25s »</button>
      </div>
    </div>
  );
}
