import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { TProduct } from "../api/createProduct";
import { deletedProduct } from "../api/deleteProduct";
import { getProducts } from "../api/getProducts";
import { ShoppingCartContext, userContext } from "../App";
import Product from "./Product";

type Props = {
  search?: string;
};

const Products: React.FC<Props> = ({ search }) => {
  const [products, setProducts] = useState<TProduct[]>([]);
  //@ts-ignore
  const [cart, setCart] = useContext(ShoppingCartContext);
  // @ts-ignore
  const [user] = useContext(userContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const databaseProdcuts = await getProducts();
      setProducts(databaseProdcuts);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (
    e: React.FormEvent,
    product: TProduct,
    amount: number,
    setAmount: React.Dispatch<React.SetStateAction<number>>
  ) => {
    e.preventDefault();

    // Change amount to 0 if user maliciously tries to bypass client side validation
    if (typeof amount != "number" || amount < 1) {
      setAmount(1);
      return;
    }
    // Check if product already in cart
    // @ts-ignore
    const cartItemIndex = cart.findIndex((cartItem) => cartItem.id == product.id);

    if (cartItemIndex != -1) {
      // copy cart
      const cartItems = [...cart];
      // Find item to update
      let cartItemToUpdate = cartItems[cartItemIndex];
      // Update amount by 1
      cartItemToUpdate.amount += amount;
      // Update cart state
      setCart(cartItems);
    } else {
      setCart([...cart, { ...product, amount }]);
    }

    // reset amount of product
    setAmount(1);
  };

  const handleDeleteProduct = async (id: string) => {
    // send delete request
    const response = await deletedProduct(id, user);

    if (response?.status === 200) {
      // Update product state
      setProducts((prevState) => prevState.filter((product) => product.id !== id));
    }
  };

  return (
    <>
      {/* Displaying and filtering products by search. If search == "", then displays all products */}
      {products &&
        products
          .filter((product) => (search ? product.name.toLowerCase().includes(search.toLowerCase()) : true))
          .map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              handleDeleteProduct={handleDeleteProduct}
            />
          ))}
    </>
  );
};

export default Products;
