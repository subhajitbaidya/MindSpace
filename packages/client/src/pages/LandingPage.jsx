import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import Hero from "../components/Hero";
import Review from "../components/Review";
import { Container } from "@mui/material";
import Features from "../components/Features";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
      <Header />

      <section style={{ marginBottom: "4rem" }}>
        <Hero />
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <ProductGrid />
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <Features />
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <Review />
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <Newsletter />
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <Footer />
      </section>
    </Container>
  );
};

export default LandingPage;
