//@ts-nocheck
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import Home from "./components/Home";

// children: [...components]
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-product",
    element: <CreateProduct />,
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
