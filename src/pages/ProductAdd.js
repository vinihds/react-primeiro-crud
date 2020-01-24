import React, { useState } from "react";

import api from "../services/api";
import * as Yup from "yup";
import { Form, Input, Textarea } from "@rocketseat/unform";

const schema = Yup.object().shape({
  ProductName: Yup.string().required("Product Name is required"),
  ProductDescription: Yup.string().required("Product Description is required"),
  ProductPrice: Yup.number().required("Product Price is required")
});

export default function ProductAdd() {
  async function handleSubmit(data) {
    const { ProductName, ProductDescription, ProductPrice } = data;

    api.post("products/add", { ProductName, ProductDescription, ProductPrice });
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Form schema={schema} onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="col-md-4">Product name</label>
              <Input type="text" name="ProductName" className="form-control" />
            </div>

            <div className="form-group">
              <label className="col-md-4">Product description</label>
              <Textarea
                className="form-control"
                cols="5"
                rows="7"
                name="ProductDescription"
              ></Textarea>
            </div>

            <div className="form-group">
              <label className="col-md-4">Product price</label>
              <Input type="text" className="form-control" name="ProductPrice" />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Create product
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
