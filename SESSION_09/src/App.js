import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import useSWR from "swr";
import "./styles.css";

const Test = ({ requiredProp }) => {
  const requiredPropRef = useRef();

  if (!requiredProp) {
    console.warn("requiredProp is required");
  }

  useEffect(() => {
    // console.dir(requiredPropRef);
  }, []);

  return <h1 ref={requiredPropRef}>{requiredProp}</h1>;
};

Test.propTypes = {
  requiredProp: PropTypes.string.isRequired
};

const timeFn = (fn) => {
  const key = "timing the function";
  console.time(key);
  fn();
  console.timeEnd(key);
};
const useGetUsers = () => {
  const { data } = useSWR("https://randomuser.me/api/?results=100");

  return data?.results;
};

export default function App() {
  const [something, setSomething] = useState("asdf");
  const test = "test";
  const dogs = [
    { name: "Snickers", age: 2 },
    { name: "hugo", age: 8 }
  ];
  const randomFunction = () => {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  };
  // timeFn(randomFunction);
  const users = useGetUsers();
  console.log(users);
  // const { data } = useSWR("https://randomuser.me/api/?results=100");
  // Regular
  // console.log({ something, test });

  // Interpolated
  // console.log(`Hello I am a ${test} string!`);

  // Styled
  // console.log("%c I am some great text", "font-size:20px; background:red;");

  // warning!

  // Error :|
  // console.error(`Warning: I'm an error`);

  // Info
  // console.info("pay attention");

  // Testing
  // console.assert(test === "test", "WTF");

  // clearing

  // Viewing DOM Elements
  // console.dir(Test);

  // Grouping together
  // dogs.forEach((dog) => {
  //   console.groupCollapsed(`${dog.name}`);
  //   console.log(`This is ${dog.name}`);
  //   console.log(`${dog.name} is ${dog.age} years old`);
  //   console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  //   console.groupEnd(`${dog.name}`);
  // });

  // counting
  // console.count("Wes");
  // console.count("Wes");
  // console.count("Steve");
  // console.count("Steve");
  // console.count("Wes");
  // console.count("Steve");
  // console.count("Wes");
  // console.count("Steve");
  // console.count("Steve");
  // console.count("Steve");
  // console.count("Steve");
  // console.count("Steve");

  // timing
  // console.log(data);
  // console.table(data.results);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Test requiredProp="i'm required" />
    </div>
  );
}
