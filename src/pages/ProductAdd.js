import React, { useState } from "react";

import Header from "./Header";

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

  function handleSubmit(e) {
    e.preventDefault();

    console.log(product);
  }

  return (
    <div className="product-container">
      <Header />

      <div className="card container">
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
