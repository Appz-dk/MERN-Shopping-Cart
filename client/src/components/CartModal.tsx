// @ts-nocheck
import React, { useContext } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../App";
import CartItem from "./CartItem";

const CartModal: React.FC = (props) => {
  //@ts-ignore
  const [cart, setCart] = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const totalCost = cart.reduce((sum, product) => sum + product.price * product.amount, 0);

  const handleCheckout = () => {
    setCart([]);
    props.onHide();
    navigate("/checkout");
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {cart.length > 0 ? (
            cart.map((product) => <CartItem product={product} key={product.id} />)
          ) : (
            <p>No items in cart...</p>
          )}
        </Container>
        <Row>
          <Col className="text-end me-2 fw-bold">Total Cost ${totalCost.toFixed(2)}</Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCheckout}>Checkout</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
