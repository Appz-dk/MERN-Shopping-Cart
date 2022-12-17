import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { TProduct } from "../api/createProduct";
import { getProducts } from "../api/getProducts";
import { ShoppingCartContext } from "../App";

const Products = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  //@ts-ignore
  const [cart, setCart] = useContext(ShoppingCartContext);

  const handleAddToCart = (product: TProduct) => {
    setCart([...cart, product]);
  };

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
        <Col className="mb-4" key={product.id}>
          <Card>
            <Card.Img variant="top" src="./assets/placeholder.svg" />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text className="mb-1 mt-2">${product.price}</Card.Text>
              <Card.Text>{product.description}</Card.Text>
              <div>
                <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Products;
