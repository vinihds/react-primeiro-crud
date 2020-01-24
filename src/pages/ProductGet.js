import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";

import api from "../services/api";

export default function ProductGet({ history }) {
  const [id, setId] = useState(0);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false);
  }

  function handleShow(id) {
    setId(id);

    setShow(true);
  }

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

  async function handleDelete() {
    api
      .get(`/products/delete/${id}`)
      .then(response => {
        toast.success(`${response.data}`);
        setProducts(products.filter(product => product._id !== id));
      })
      .catch(error => toast.error(`${error.response.statusText}`));
  }

  return (
    <div className="container">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm exclusion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you shore you want to exclude this product?</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClose}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleClose();
              handleDelete();
            }}
          >
            Confirm!
          </button>
        </Modal.Footer>
      </Modal>

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
                <button className="btn btn-danger" onClick={() => handleShow(product._id)}>
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
