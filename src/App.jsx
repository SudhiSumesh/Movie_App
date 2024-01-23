import React from "react";
import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import { action, originals } from "./Urls/Urls";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <RowPost url={originals} title="Netflix Orginals" />
      <RowPost url={action} title="Action" isSmall />
    </>
  )
}

export default App
