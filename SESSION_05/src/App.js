import { useState } from "react";
import "./styles.css";
import styles from "./panel.module.css";
import classNames from "classnames";

const Panel = ({ bgImgSrc, words, isOpen, onClick }) => (
  <div
    className={classNames(styles.panel, { [styles.open]: isOpen })}
    style={{ backgroundImage: `url(${bgImgSrc})` }}
    onClick={onClick}
  >
    {words.map((word, index) => (
      <p key={index}>{word}</p>
    ))}
  </div>
);

export default function App() {
  const [openPanelId, setOpenPanelId] = useState();
  const panelData = [
    {
      bgImgSrc: "https://source.unsplash.com/gYl-UtwNg_I/1500x1500",
      words: ["Hey", "Let's", "Dance"]
    },
    {
      bgImgSrc: "https://source.unsplash.com/rFKUFzjPYiQ/1500x1500",
      words: ["Give", "Take", "Receive"]
    },
    {
      bgImgSrc:
        "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d",
      words: ["Experience", "It", "Today"]
    },
    {
      bgImgSrc: "https://source.unsplash.com/ITjiVXcwVng/1500x1500",
      words: ["Give", "All", "You can"]
    },
    {
      bgImgSrc: "https://source.unsplash.com/3MNzGlQM7qs/1500x1500",
      words: ["Life", "In", "Motion"]
    }
  ];

  return (
    <div className="panels">
      {panelData.map(({ bgImgSrc, words }, index) => (
        <Panel
          key={index}
          bgImgSrc={bgImgSrc}
          words={words}
          onClick={() => setOpenPanelId(index)}
          isOpen={openPanelId === index}
        />
      ))}
    </div>
  );
}
