import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { createProduct, TProduct } from "../api/createProduct";

const DEFAULT_FORM_STATE = {
  name: "",
  price: "",
  description: "",
};

const CreateProduct = () => {
  const [form, setForm] = useState<TProduct>(DEFAULT_FORM_STATE);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get input values
    const { name, value } = e.target;
    // Update state
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();

    // Guard Clause
    if (!form.name || !form.price || !form.description) return;
    // Posting to database
    createProduct(form);
    // Reset form
    setForm(DEFAULT_FORM_STATE);
  };

  return (
    <Container fluid="sm">
      <Row>
        <Col className="m-auto" lg={4} xs={8}>
          <h1 className="text-center mt-5 mb-4 fs-3">Create a product</h1>
          <Form onSubmit={handleCreateProduct}>
            <Form.Group className="mb-3" controlId="product-name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={form.name} onChange={handleFormChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="product-price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                min={0}
                step={0.01}
                value={form.price}
                onChange={handleFormChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="product-description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows={3}
                value={form.description}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateProduct;
