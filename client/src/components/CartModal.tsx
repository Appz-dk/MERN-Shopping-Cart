// @ts-nocheck
import React, { useContext } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { ShoppingCartContext } from "../App";
import CartItem from "./CartItem";

const CartModal: React.FC = (props) => {
  //@ts-ignore
  const [cart] = useContext(ShoppingCartContext);

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {cart.length > 0 && cart.map((product) => <CartItem product={product} key={product.id} />)}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
