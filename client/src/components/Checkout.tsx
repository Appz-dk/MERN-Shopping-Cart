import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Checkout = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col className="text-center">
          <h1>Checkout</h1>
          <p>You have succesfully checked out, Thanks for shopping with us!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
