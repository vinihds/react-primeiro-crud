import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import ProductAdd from "./pages/ProductAdd";
import ProductGet from "./pages/ProductGet";

export default function Routes() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <Link to={"/products/add"} className="nav-link">
                Create Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/products"} className="nav-link">
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/products/add" component={ProductAdd} />
        <Route path="/products" exact component={ProductGet} />
      </Switch>
    </BrowserRouter>
  );
}
