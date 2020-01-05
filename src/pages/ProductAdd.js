import React, { useState } from "react";

import api from '../services/api';

export default function ProductAdd() {
  const initialFormState = {
    ProductName: "",
    ProductDescription: "",
    ProductPrice: ""
  };

  const [product, setProduct] = useState(initialFormState);

  function handleInputChange(e) {
    const { name, value } = e.target;

    setProduct({ ...product, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('products/add', product);

    console.log(response);
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="col-md-4">Product name</label>
              <input
                type="text"
                name="ProductName"
                className="form-control"
                value={product.ProductName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label className="col-md-4">Product description</label>
              <textarea
                className="form-control"
                cols="5"
                rows="7"
                name="ProductDescription"
                value={product.ProductDescription}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label className="col-md-4">Product price</label>
              <input
                type="text"
                className="form-control"
                name="ProductPrice"
                value={product.ProductPrice}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Create product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
