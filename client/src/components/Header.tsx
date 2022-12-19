import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../App";
import "./Header.css";
import { BsCart } from "react-icons/bs";

import CartModal from "./CartModal";

const Header = () => {
  //@ts-ignore
  const [cart] = useContext(ShoppingCartContext);

  const [showCart, setShowCart] = useState(false);

  // @ts-ignore
  const itemsInCart = cart.reduce((acc, item) => acc + item.amount, 0);

  return (
    <>
      {/*@ts-ignore */}
      <CartModal show={showCart} onHide={() => setShowCart(false)} />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            Shop-Logo
          </Navbar.Brand>
          <Nav className="d-flex col">
            <div className="d-flex col">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/create-product"}>
                New Product
              </Nav.Link>
            </div>
            <div>
              <Button className="bg-transparent border-0" onClick={() => setShowCart(true)}>
                <BsCart size={22} />
                <span id="lblCartCount">{itemsInCart}</span>
              </Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
