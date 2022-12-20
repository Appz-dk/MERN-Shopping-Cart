import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { loginUser } from "../api/loginUser";
import { userContext } from "../App";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // @ts-ignore
  const [user, setUser] = useContext(userContext);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await loginUser({ username, password });
    const { token, user } = response?.data;

    setUser({ token, user });

    navigate("/");
  };

  return (
    <Container className="col-lg-4 col-md-6 col-sm-8 col-10 mt-5">
      <Row>
        <Col>
          <Form onSubmit={(e) => handleLogin(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus={true}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
