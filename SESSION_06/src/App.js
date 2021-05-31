import "./styles.css";
import { useState } from "react";
import useSWR from "swr";
import Highlighter from "react-highlight-words";

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

export default function App() {
  const { data } = useSWR(endpoint);
  const [query, setQuery] = useState("");
  const filteredData = (data ?? []).filter(({ city, state }) => {
    return (
      city.toLowerCase().includes(query.toLowerCase()) ||
      state.toLowerCase().includes(query.toLowerCase())
    );
  });

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className="search-form">
      <input
        type="text"
        className="search"
        placeholder="City or State"
        onChange={onChange}
      />
      <ul className="suggestions">
        {query.length !== 0 &&
          filteredData.map(({ city, state, population }) => (
            <li key={`${city}${state}`}>
              <Highlighter
                highlightClassName="hl"
                searchWords={[query]}
                autoEscape={true}
                textToHighlight={`${city}, ${state}`}
              />
              <span className="population">
                {parseFloat(population).toLocaleString()}
              </span>
            </li>
          ))}
      </ul>
    </form>
  );
}
