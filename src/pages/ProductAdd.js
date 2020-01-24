import React from "react";

import api from "../services/api";
import * as Yup from "yup";
import { Form, Input, Textarea } from "@rocketseat/unform";
import { toast } from "react-toastify";

const schema = Yup.object().shape({
  ProductName: Yup.string().required("Product Name is required"),
  ProductDescription: Yup.string().required("Product Description is required"),
  ProductPrice: Yup.number().required("Product Price is required")
});

export default function ProductAdd() {
  async function handleSubmit(data) {
    const { ProductName, ProductDescription, ProductPrice } = data;

    await api
      .post("products/add", {
        ProductName,
        ProductDescription,
        ProductPrice
      })
      .then(response => toast.success(`${response.data.Product}`))
      .catch(error => toast.error(`${error.response.statusText}`));
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Form schema={schema} onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="col-md-4">Product Name</label>
              <Input type="text" name="ProductName" className="form-control" />
            </div>

            <div className="form-group">
              <label className="col-md-4">Product Description</label>
              <Textarea
                className="form-control"
                cols="5"
                rows="7"
                name="ProductDescription"
              ></Textarea>
            </div>

            <div className="form-group">
              <label className="col-md-4">Product Price</label>
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
