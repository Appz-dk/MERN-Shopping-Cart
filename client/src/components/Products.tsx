import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { TProduct } from "../api/createProduct";
import { getProducts } from "../api/getProducts";
import { ShoppingCartContext } from "../App";

type Props = {
  search?: string;
};

const Products: React.FC<Props> = ({ search }) => {
  const [products, setProducts] = useState<TProduct[]>([]);
  //@ts-ignore
  const [cart, setCart] = useContext(ShoppingCartContext);

  const handleAddToCart = (product: TProduct) => {
    // Check if product already in cart
    // @ts-ignore
    const cartItemIndex = cart.findIndex((cartItem) => cartItem.id == product.id);

    if (cartItemIndex != -1) {
      // copy cart
      const cartItems = [...cart];
      // Find item to update
      let cartItemToUpdate = cartItems[cartItemIndex];
      // Update amount by 1
      cartItemToUpdate.amount++;
      // Update cart state
      setCart(cartItems);
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
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
      {/* Displaying and filtering products by search. If search == "", then displays all products */}
      {products
        .filter((product) => (search ? product.name.toLowerCase().includes(search.toLowerCase()) : true))
        .map((product) => (
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
