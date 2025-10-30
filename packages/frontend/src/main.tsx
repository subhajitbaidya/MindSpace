import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import LoginPage from "./components/LoginPage";
import LandingPage from "./components/LandingPage";
import ProductsPage from "./components/ProductsPage";
import Layout from "./components/Layout";
import TherapistPage from "./components/TherapistPage";
import CommunityPage from "./components/CommunityPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="journal" element={<ProductsPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="therapistagent" element={<TherapistPage />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
