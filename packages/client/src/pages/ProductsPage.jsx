import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ProductCard from "../components/widgets/ProductCard";
import SummaryCard from "../components/widgets/SummaryCard";
import BookImg from "../assets/images/atomic.png";

const Item = ({ children }) => (
  <Paper
    sx={{
      p: 2,
      display: "flex",
      gap: 2,
      justifyContent: "space-between",
    }}
  >
    {children}
  </Paper>
);

const products = [
  {
    id: 1,
    name: "Atomic Habits",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 234,
    image: BookImg,
    badge: "Best Seller",
    description: "Mind booster/productivity",
    author: "James Clear",
  },
];

const ProductsPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        mt: 4,
      }}
    >
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          maxWidth: 1200,
          width: "100%",
        }}
      >
        <Grid item xs={12} md={6}>
          <Item sx={{ display: "flex", gap: 2 }}>
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                // onFavoriteToggle={toggleFavorite}
                // isFavorite={favorites.has(product.id)}
                // onQuickAdd={handleQuickAdd}
                // onViewDetails={handleViewDetails}
                className="animate-fade-in-up"
              />
            ))}

            {/* <ProductCard sx={{ flex: 2, minWidth: 0 }} /> */}
            <SummaryCard sx={{ flex: 1, minWidth: 0 }} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsPage;
