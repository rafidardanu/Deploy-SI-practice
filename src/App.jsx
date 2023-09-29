// eslint-disable-next-line no-unused-vars
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateProduct from "./pages/CreateProduct";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/CProduct",
    element: <CreateProduct />,
  },
  {
    path: "/CProduct/:id",
    element: <ProductDetail />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Route />
    </RouterProvider>
  );
}

export default App;
