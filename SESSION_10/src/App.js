import { useState } from "react";
import "./styles.css";

const DEFAULT_ITEMS = [
  { text: "This is an inbox layout.", checked: false },
  { text: "Check one item", checked: false },
  { text: "Hold down your Shift key", checked: false },
  { text: "Check a lower item", checked: false },
  {
    text: "Everything in between should also be set to checked",
    checked: false
  },
  { text: "Try to do it without any libraries", checked: false },
  { text: "Just regular JavaScript", checked: false },
  { text: "Good Luck!", checked: false },
  { text: "Don't forget to tweet your result!", checked: false }
];

export default function App() {
  const [items, setItems] = useState(DEFAULT_ITEMS);
  const [lastUpdatedItem, setLastUpdatedItem] = useState(null);
  const toggleItem = (checked, clickedItemIndex) => {
    const updatedItems = items.map((item, index) =>
      clickedItemIndex === index ? { ...item, checked } : item
    );

    setItems(updatedItems);
    setLastUpdatedItem(updatedItems[clickedItemIndex]);
  };
  const checkMultipleItems = (clickedItemIndex) => {
    const lastUpdateItemIndex = items.findIndex(
      ({ text }) => text === lastUpdatedItem.text
    );
    const startIndex = Math.min(clickedItemIndex, lastUpdateItemIndex);
    const endIndex = Math.max(clickedItemIndex, lastUpdateItemIndex);
    const updatedItems = items.map((item, index) =>
      index < startIndex || index > endIndex ? item : { ...item, checked: true }
    );

    setItems(updatedItems);
    setLastUpdatedItem(null);
  };
  const handleChange = (e, clickedItemIndex) => {
    const checked = e.target.checked;

    if (lastUpdatedItem?.checked && checked && e.nativeEvent.shiftKey) {
      checkMultipleItems(clickedItemIndex);
    } else {
      toggleItem(checked, clickedItemIndex);
    }
  };

  return (
    <div className="inbox">
      {items.map(({ text, checked }, index) => (
        <div className="item" key={index}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => handleChange(e, index)}
          />
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
