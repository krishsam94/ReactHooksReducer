import React, { useContext } from "react";
import { MainContext } from "./context/MainContext";

export default function Child2(props) {
  const [message, setMessage] = useContext(MainContext);
  return (
    <>
      <div>Child2</div>
      <div>{message}</div>
    </>
  );
}
