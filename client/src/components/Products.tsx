import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { TProduct } from "../api/createProduct";
import { getProducts } from "../api/getProducts";

const Products = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const databaseProdcuts = await getProducts();
      setProducts(databaseProdcuts);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <Col className="mb-4">
          <Card key={product.id}>
            <Card.Img variant="top" src="./assets/placeholder.svg" />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text className="mb-1 mt-2">${product.price}</Card.Text>
              <Card.Text>{product.description}</Card.Text>
              <div>
                <Button>Add to cart</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );

  //   return (
  //     <Row lg={3}>
  //       {products.map((product) => {
  //         const { id, name, price, description } = product;
  //         return (
  //           <Col className="d-flex">
  //             <Card className="flex-fill" key={id}>
  //               <Card.Img variant="top" src={"#"} />
  //               <Card.Body>
  //                 <Card.Title>{name}</Card.Title>
  //                 <Card.Text>{description}</Card.Text>
  //                 <Card.Text>{price}</Card.Text>
  //                 <Button variant="primary">Add to cart</Button>
  //               </Card.Body>
  //             </Card>
  //           </Col>
  //         );
  //       })}
  //     </Row>
  //   );
};

export default Products;
