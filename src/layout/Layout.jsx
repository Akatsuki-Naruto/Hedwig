import React from "react";
import { useState } from "react";
import Nav from "./toggleSidebav/Nav";
import Index from "./index";

const Layout = (props) => {
  return props.trigger ? (
    <>
      <Nav/>
      {props.children}
    </>
  ) : (
    <>
        <Index/>
        
    </>
    
  );
};

export default Layout;
