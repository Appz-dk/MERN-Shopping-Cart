import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Container, Nav, Navbar } from "react-bootstrap";
import { ShoppingCartContext } from "../App";
import "./Header.css";
import { BsCart } from "react-icons/bs";

import CartModal from "./CartModal";
import { useIsLoggedIn } from "../hooks/useIsLoggedIn";
import { useIsAdmin } from "../hooks/useIsAdmin";

const Header = () => {
  //@ts-ignore
  const [cart] = useContext(ShoppingCartContext);
  const isAdmin = useIsAdmin();
  const isLoggedin = useIsLoggedIn();

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
              {isLoggedin && isAdmin && (
                <Nav.Link as={Link} to={"/create-product"}>
                  New Product
                </Nav.Link>
              )}
            </div>
            <div className="d-flex align-items-center">
              <Col className="me-4">
                {!isLoggedin && (
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
                {isLoggedin && (
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
