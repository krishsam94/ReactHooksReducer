import React, { useState, useReducer } from "react";
import { MainContext } from "./MainContext";

const { Provider } = MainContext;
console.log(MainContext);

let reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
};
export const MainProvider = (props) => {
  //const [message, setMessage] = useState("My name is context");
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return <Provider value={[state, dispatch]}>{props.children}</Provider>;
};
