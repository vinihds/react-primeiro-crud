import React, { useState, useEffect } from "react";

import api from "../services/api";

export default function ProductGet({history}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("/products");

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  function handleEdit(id) {
    history.push(`/products/edit/${id}`);
  }

  async function handleDelete(id) {
    await api.get(`/products/delete/${id}`);

    setProducts(products.filter(product => product._id !== id));
  }

  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <td>Product Name</td>
            <td>Product Description</td>
            <td>Product Price</td>
            <td colSpan="2">Actions</td>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>{product.ProductName}</td>
              <td>{product.ProductDescription}</td>
              <td>{product.ProductPrice}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(product._id)}
                >
                  EDIT
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
