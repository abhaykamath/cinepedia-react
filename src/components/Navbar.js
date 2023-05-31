import React from "react";
import "../styles/Navbar.css";

function Navbar({children}) {
  return <div className="nav-bar">
    <h3><span id="app-title">CINEPEDIA</span> &nbsp;&nbsp; . . . your go to movie search engine</h3>
    {children}
  </div>;
}

export default Navbar;
