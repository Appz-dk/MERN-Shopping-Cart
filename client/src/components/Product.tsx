import React, { useState, useContext } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { TProduct } from "../api/createProduct";
import { userContext } from "../App";

type Props = {
  product: TProduct;
  handleAddToCart: (
    e: React.FormEvent,
    product: TProduct,
    amount: number,
    setAmount: React.Dispatch<React.SetStateAction<number>>
  ) => void;
  handleDeleteProduct: (id: string) => void;
};

const Product: React.FC<Props> = ({ product, handleAddToCart, handleDeleteProduct }) => {
  const [amount, setAmount] = useState<number>(1);
  // @ts-ignore
  const [user] = useContext(userContext);

  const hasAdminRole = user.user?.role === "admin";
  return (
    <>
      <Col className="mb-4" key={product.id}>
        <Card>
          <Card.Img variant="top" src="./assets/placeholder.svg" />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text className="mb-1 mt-2">${product.price}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
            <Row className="align-items-center">
              <Col>
                <form className="d-flex" onSubmit={(e) => handleAddToCart(e, product, amount, setAmount)}>
                  <input
                    className="col-2 text-center me-2"
                    type="number"
                    min={1}
                    value={amount}
                    onChange={(e) => setAmount(+e.target.value)}
                  />
                  <Button type="submit" size="sm">
                    Add to cart
                  </Button>
                </form>
              </Col>
              {user.token && hasAdminRole && (
                <Col className="d-flex justify-content-center gap-3">
                  <Button className="d-flex bg-transparent p-0 border-0 text-end fs-4" onClick={() => null}>
                    <FiEdit color="black" />
                  </Button>
                  <Button
                    className="d-flex bg-transparent p-0 border-0 text-end fs-4"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <BsTrash color="red" />
                  </Button>
                </Col>
              )}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Product;
