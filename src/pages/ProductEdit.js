import React, { useState, useEffect } from "react";
import api from "../services/api";
import * as Yup from "yup";
import { Form, Input, Textarea } from "@rocketseat/unform";
import { toast } from "react-toastify";

export default function ProductEdit({ match }) {
  const { id } = match.params;
  const [product, setProduct] = useState({});

  const schema = Yup.object().shape({
    ProductName: Yup.string().required("Product Name is required"),
    ProductDescription: Yup.string().required(
      "Product Description is required"
    ),
    ProductPrice: Yup.string().required("Product Price is required")
  });

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get(`/products/edit/${id}`);
      const { data } = response;

      setProduct({ ...data });
    }

    loadProduct();
  }, []);

  async function handleSubmit(data) {
    const { ProductName, ProductDescription, ProductPrice } = data;

    api
      .post(`/products/update/${id}`, {
        ProductName,
        ProductDescription,
        ProductPrice
      })
      .then(response => {
        toast.success(`${response.data}`);
      })
      .catch(error => toast.error(`${error.response.statusText}`));
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Form schema={schema} onSubmit={handleSubmit} initialData={product}>
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
              <Input type="text" name="ProductPrice" className="form-control" />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Update product
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
