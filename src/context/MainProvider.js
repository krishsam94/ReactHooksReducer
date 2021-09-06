import React, { useState } from "react";
import { MainContext } from "./MainContext";

const { Provider } = MainContext;
console.log(MainContext);
export const MainProvider = (props) => {
  const [message, setMessage] = useState("My name is context");

  return <Provider value={[message, setMessage]}>{props.children}</Provider>;
};
