import React, { useContext } from "react";
import { ShoppingCartContext } from "../App";
import { Col, Row, Image, Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { TProduct } from "../api/createProduct";

type Props = {
  product: TProduct & { amount: number };
};

const CartItem: React.FC<Props> = ({ product }) => {
  //@ts-ignore
  const [_, setCart] = useContext(ShoppingCartContext);

  // const product = {
  //   name: "Almond Milk",
  //   description: "This is delicious vegan milk!",
  //   price: "$2.99",
  // };

  const handleCartItemDelete = (id: string) => {
    //@ts-ignore
    setCart((cart) => cart.filter((cartItem) => cartItem.id != id));
  };

  return (
    <>
      <Row className="mb-3">
        <Col className="col-3">
          <Image className="rounded" width={80} height={80} src="./assets/placeholder.svg" />
        </Col>
        <Col className="ms-0">
          <Row className="fw-semibold mb-1">{product.name}</Row>
          <Row>{product.description}</Row>
        </Col>
        <Col className="d-flex flex-column justify-content-between">
          <Row className="justify-content-end pe-2">
            <Col className="text-end px-0">
              <Button
                className="bg-transparent p-0 border-0 text-end fs-5"
                onClick={() => handleCartItemDelete(product.id)}
              >
                <BsTrash color="red" />
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col className="col-4 text-end ps-0">
              <span className="">{product.amount}x</span>
            </Col>
            <Col className="col-6 text-end ps-0">
              <span>{product.price}</span>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
    </>
  );
};

export default CartItem;
