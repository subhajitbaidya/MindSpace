import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SellerPage from "./components/widgets/SellerPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import Layout from "./pages/Layout.jsx";
import ProductCollection from "./pages/ProductCollection.jsx";
import Notification from "./lib/Notification.jsx";
import Journal from "./pages/Journal.jsx";
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
        <Route path="community" element={<Journal />} />
        <Route path="seller" element={<SellerPage />} />
        <Route path="productdetails" element={<ProductDetailsPage />} />
        <Route path="collections" element={<ProductCollection />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Notification />
  </React.StrictMode>
);
