import ProductFeatureWall from "../components/widgets/ProductFeatureWall";
import Hero from "../components/widgets/Hero";
import Review from "../components/widgets/Review";
import { Container } from "@mui/material";
import CompanyFeatureWall from "../components/CompanyFeatureWall";
import Newsletter from "../components/widgets/NewsLetter";

const LandingPage = () => {
  return (
    <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
      <section style={{ marginBottom: "4rem" }}>
        <Hero />
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <ProductFeatureWall />
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <CompanyFeatureWall />
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <Review />
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <Newsletter />
      </section>
    </Container>
  );
};

export default LandingPage;
