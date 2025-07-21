import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import Hero from "../components/Hero";
import Review from "./Review";
import Dashboard from "./Dashboard";
import { Container } from "@mui/material";

const LandingPage = () => {
  return (
    <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
      <Header />
      
      <section style={{ marginBottom: '4rem' }}>
        <Hero />
      </section>
      
      <section style={{ marginBottom: '4rem' }}>
        <ProductGrid />
      </section>
      
      <section style={{ marginBottom: '4rem' }}>
        <Dashboard />
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <Review />
      </section>
    </Container>
  );
};

export default LandingPage;
