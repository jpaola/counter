import React from "react";

// Stateless Functional Component
const NavBar = props => {
console.log('NavBar - Rendered');

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar {""}
        <span className="badge badge-pill badge-secondary">
        {props.totalCounters}
        </span>
      </a>
    </nav>
  );
}

export default NavBar;
