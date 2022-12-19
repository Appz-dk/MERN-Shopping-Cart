import React, { useState } from "react";
import { Container, Row, Form, Col } from "react-bootstrap";
import Products from "./Products";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleSearchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Container fluid="sm">
      <Row className="mt-5 align-items-center">
        <Col className="col-4 justify-content-center">
          <Form.Control
            type="text"
            size="lg"
            placeholder="Search for a Product"
            onChange={handleSearchBarChange}
            value={search}
          />
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="mt-3">
        <Products search={search} />
      </Row>
    </Container>
  );
};

export default Home;
