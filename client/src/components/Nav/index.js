import React from "react";
import { Link } from "react-router-dom";

var style = {
  backgroundColor: "#BBBBBB",
  borderTop: "1px solid #E7E7E7",
  textAlign: "right",
  left: "0",
  bottom: "0",
  height: "80px",
  width: "100%",
}

function Nav() {
  return (
    <nav className="navbar-expand-lg">

        <div>
          <ul className="navbar-nav ml-auto w-100 justify-content-end" style={style}>
            <li className="nav-item">
              <Link to="/">Books</Link>
            </li>
            <li className="nav-item">
              <Link to="/detail">Detail</Link>
            </li>
        
          </ul>
        </div>
    </nav>
  );
}

export default Nav;
