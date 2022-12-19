import React from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { BsTrash } from "react-icons/bs";
import { TProduct } from "../api/createProduct";

type Props = {
  product: TProduct & { amount: number };
};

const CartItem: React.FC<Props> = ({ product }) => {
  // const product = {
  //   name: "Almond Milk",
  //   description: "This is delicious vegan milk!",
  //   price: "$2.99",
  // };

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
            <Button className="col-5 bg-transparent border-0 px-0 py-0 text-end fs-5">
              <BsTrash color="red" />
            </Button>
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
