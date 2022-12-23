//@ts-nocheck
import React, { useState, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import Header from "./components/Header";
import Home from "./components/Home";
import ShoppingCart from "./components/CartItem";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { getValueInLocalStorage, setValueInLocalStorage } from "./localStorage/localStorageApi";
import EditProduct from "./components/EditProduct";
import Checkout from "./components/Checkout";

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

// children: [...components]
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-product",
        element: <CreateProduct />,
      },
      {
        path: "/products/:productId",
        element: <EditProduct />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);

// React Context
export const ShoppingCartContext = React.createContext();
export const userContext = React.createContext();

function App() {
  const cartState = useState(() => {
    const cartInLocalStorage = getValueInLocalStorage("cart");
    return cartInLocalStorage ? JSON.parse(cartInLocalStorage) : [];
  });

  const userState = useState(() => {
    const userInLocalStorage = getValueInLocalStorage("user");
    return userInLocalStorage ? JSON.parse(userInLocalStorage) : {};
  });

  useEffect(() => {
    setValueInLocalStorage("user", JSON.stringify(userState[0]));
    setValueInLocalStorage("cart", JSON.stringify(cartState[0]));
  }, [userState, cartState]);

  return (
    <userContext.Provider value={userState}>
      <ShoppingCartContext.Provider value={cartState}>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </ShoppingCartContext.Provider>
    </userContext.Provider>
  );
}

export default App;
