import React, { useContext } from "react";
import { userContext } from "./App.js";
function Child3() {
  const user = useContext(userContext);
  return <div>{user.name}</div>;
}
export default Child3;
