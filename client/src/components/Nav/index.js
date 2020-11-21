import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Reading List
      </a>
      <Link to="/">Books</Link>
      <Link to="/detail">Detail</Link>
    </nav>
  );
}

export default Nav;
