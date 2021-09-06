import "./styles.css";
import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { MainProvider } from "./context/MainProvider";

export default function App() {
  let [count, setCount] = useState(0);

  return (
    <MainProvider>
      <div className="App">
        <h1
          onClick={() => {
            setCount(++count);
          }}
        >
          Hello {count}
        </h1>
        <Child1 />
        <Child2 />
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </MainProvider>
  );
}
