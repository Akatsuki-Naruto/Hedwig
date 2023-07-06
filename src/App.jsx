import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


import "./App.css";
import Index from "./layout/index/index";
import Nav from "./layout/toggleSidebav/Nav";
import Sidebav from "./components/sidebav/sidebav";
import Layout from "./layout/Layout";

function App() {
  const [count, setCount] = useState(0);
  const [isShow, setisShow] = useState(true);

  return (
    <>
      <Sidebav />
      {/* <Nav className={Nav} id={Nav}></Nav> */}
      <Index/>
      {/* <Layout trigger={isShow} setTrigger={setisShow} /> */}
    </>
  );
}

export default App;
