import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Container, Nav, Navbar } from "react-bootstrap";
import { ShoppingCartContext, userContext } from "../App";
import "./Header.css";
import { BsCart } from "react-icons/bs";

import CartModal from "./CartModal";

const Header = () => {
  //@ts-ignore
  const [cart] = useContext(ShoppingCartContext);
  //@ts-ignore
  const [user, setUser] = useContext(userContext);

  const navigate = useNavigate();

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
            <div className="d-flex align-items-center">
              <Col className="me-4">
                {!user.token && (
                  <div className="d-flex gap-3">
                    <Button className="btn-sm text-white" variant="outline-primary" onClick={() => navigate("/login")}>
                      Login
                    </Button>
                    <Button
                      className="btn-sm text-white"
                      variant="outline-primary"
                      onClick={() => navigate("/register")}
                    >
                      Register
                    </Button>
                  </div>
                )}
                {user.token && (
                  <Button className="btn-sm text-white" variant="outline-primary" onClick={() => navigate("/logout")}>
                    Logout
                  </Button>
                )}
              </Col>
              <Col>
                <Button className="bg-transparent border-0 btn-sm" onClick={() => setShowCart(true)}>
                  <BsCart size={22} />
                  <span id="lblCartCount">{itemsInCart}</span>
                </Button>
              </Col>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
