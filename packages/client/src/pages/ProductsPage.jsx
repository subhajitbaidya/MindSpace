import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ProductCard from "../components/widgets/ProductCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
}));

const ProductsPage = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
          <Item>
            <ProductCard />
          </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <ProductCard />
          </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <ProductCard />
          </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <ProductCard />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsPage;
