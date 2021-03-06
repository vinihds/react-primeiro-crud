import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import ProductAdd from "./pages/ProductAdd";
import ProductGet from "./pages/ProductGet";
import ProductEdit from "./pages/ProductEdit";

export default function Routes() {
  return (
    <BrowserRouter>
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} autoClose={3000} />
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
        <Route path="/products/edit/:id" component={ProductEdit} />
      </Switch>
    </BrowserRouter>
  );
}
