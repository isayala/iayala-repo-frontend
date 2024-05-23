import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <Router>
      <div>
        <nav className="navbar ">
          <ul>
            <li>
              <link to="./home">Home</link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default Navbar;
