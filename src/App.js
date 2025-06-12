import "./styles.css";
import Child1 from "./child1.jsx";
import { useState } from "react";
import { createContext } from "react";
const userContext = createContext();
export default function App() {
  const [user, setUser] = useState({ name: "rohan" });
  return (
    <userContext.Provider value={user}>
      <Child1 />
    </userContext.Provider>
  );
}
export { userContext };
