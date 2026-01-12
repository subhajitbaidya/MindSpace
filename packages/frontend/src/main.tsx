import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./gql/gql.client";
import LoginPage from "./Pages/LoginPage";
import LandingPage from "./Pages/LandingPage";
import ProductsPage from "./Pages/ProductsPage";
import Layout from "./components/Layout/Layout";
import TherapistPage from "./Pages/TherapistPage";
import CommunityPage from "./Pages/CommunityPage";
import JournalPage from "./Pages/JournalPage";
import MeditatePage from "./Pages/MeditatePage";
import UserJournals from "./Pages/UserJournals";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="journal" element={<JournalPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="meditate" element={<MeditatePage />} />
        <Route path="therapistagent" element={<TherapistPage />} />
        <Route path="userjournals" element={<UserJournals />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={routes} />
    </ApolloProvider>
  </StrictMode>
);
