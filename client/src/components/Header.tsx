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
              {/* <Nav.Link as={Link} to={"/cart"} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <span id="lblCartCount">{cart.length}</span>
              </Nav.Link> */}
              <Button className="bg-transparent border-0" onClick={() => setShowCart(true)}>
                <BsCart size={22} />
                <span id="lblCartCount">{cart.length}</span>
              </Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
