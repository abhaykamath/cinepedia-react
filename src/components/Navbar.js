import React from "react";
import "../styles/Navbar.css";

function Navbar({ children }) {
  return (
    <div className="nav-bar">
      <h3>
        <span>C</span>INEPEDI<span>A</span>
      </h3>
      {children}
    </div>
  );
}

export default Navbar;
