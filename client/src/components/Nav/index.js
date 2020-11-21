import React from "react";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import "./style.css";

function Nav() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1 className="p-2 mb-2 ml-3">
                    <a className="navbar-brand pl-3 px-1" href="/">Google Books
                    </a>
                </h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-md-auto">
                        <li className="nav-item">
                            <NavLink to="/search" className="nav-link">Search</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/saved" className="nav-link">Saved</NavLink>
                        </li>
                    </ul>
                    <div className="px-3"></div>
                </div>
            </nav>
        </header>
    );
};
=======
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
>>>>>>> 028410c3fad209ffae71ef69f593916adce7eede

export default Nav;