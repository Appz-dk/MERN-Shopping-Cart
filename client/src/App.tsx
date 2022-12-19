//@ts-nocheck
import React, { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import Header from "./components/Header";
import Home from "./components/Home";
import ShoppingCart from "./components/CartItem";

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
        path: "/cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

// React Context
export const ShoppingCartContext = React.createContext();

function App() {
  const cartState = useState([]);
  return (
    <ShoppingCartContext.Provider value={cartState}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ShoppingCartContext.Provider>
  );
}

export default App;
