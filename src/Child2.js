import React, { useContext } from "react";
import { MainContext } from "./context/MainContext";

export default function Child2(props) {
  const [state, dispatch] = useContext(MainContext);
  return (
    <>
      <div>Child2</div>
      <div
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        {state.counter}
      </div>
    </>
  );
}
