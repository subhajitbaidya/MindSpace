import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SellerPage from "./components/SellerPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import Layout from "./pages/Layout.jsx";
import ProductShowcase from "./components/ProductGrid.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import SupportPage from "./pages/SupportPage.jsx";

// Header routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="seller" element={<SellerPage />} />
        <Route path="products" element={<ProductShowcase />} />
        <Route path="collections" element={<ProductsPage />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
