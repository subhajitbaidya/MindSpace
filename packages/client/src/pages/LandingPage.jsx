import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import Hero from "../components/Hero";
import Review from "./Review";
import Dashboard from "./Dashboard";
import { Container } from "@mui/material";

const LandingPage = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <ProductGrid />
      <Dashboard />
      <Review />
    </Container>
  );
};

export default LandingPage;
