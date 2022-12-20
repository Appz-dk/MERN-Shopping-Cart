import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { TProduct } from "../api/createProduct";

type Props = {
  product: TProduct;
  handleAddToCart: (
    e: React.FormEvent,
    product: TProduct,
    amount: number,
    setAmount: React.Dispatch<React.SetStateAction<number>>
  ) => void;
};

const Product: React.FC<Props> = ({ product, handleAddToCart }) => {
  const [amount, setAmount] = useState<number>(1);
  return (
    <>
      <Col className="mb-4" key={product.id}>
        <Card>
          <Card.Img variant="top" src="./assets/placeholder.svg" />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text className="mb-1 mt-2">${product.price}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
            <div>
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
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Product;
