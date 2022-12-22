import React, { useState, useEffect, useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createProduct, TProduct } from "../api/createProduct";
import { userContext } from "../App";

const DEFAULT_FORM_STATE = {
  name: "",
  price: "",
  description: "",
  id: "",
};

const CreateProduct = () => {
  const [form, setForm] = useState<TProduct>(DEFAULT_FORM_STATE);
  const [error, setError] = useState("");

  // Protect route if user not logged in
  // @ts-ignore
  const [user] = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.token) navigate("/login");
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get input values
    const { name, value } = e.target;
    // Update state
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    // Guard Clause
    if (!form.name || !form.price || !form.description) return;
    // Posting to database
    const response = await createProduct(form, user);
    // Reset form
    setForm(DEFAULT_FORM_STATE);

    if (response && response?.response?.status != 200) {
      setError(response?.response?.data);
    } else {
      navigate("/");
    }
  };

  return (
    <Container fluid="sm">
      <Row>
        <Col className="m-auto" lg={4} xs={8}>
          <h1 className="text-center mt-5 mb-4 fs-3">Create a product</h1>
          <Form onSubmit={handleCreateProduct}>
            <Form.Group className="mb-3" controlId="product-name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                onChange={handleFormChange}
                required
                autoFocus={true}
              />
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
            <Row>
              <Col className="col-md-4">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
              <Col>
                <div className="mt-2">
                  {error && <Form.Text className="text-danger fs-6 fw-bolder">{error}</Form.Text>}
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateProduct;
