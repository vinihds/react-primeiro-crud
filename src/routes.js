import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./pages/Header";
import ProductAdd from './pages/ProductAdd';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Header} />
      <Route path="/products/add" component={ProductAdd} />
    </BrowserRouter>
  );
}
