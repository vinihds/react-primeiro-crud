import React from "react";

export default function Header({ history }) {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <a href="#" className="nav-link">
              Create product
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Products
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
