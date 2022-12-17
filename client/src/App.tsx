import React from "react";
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

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
