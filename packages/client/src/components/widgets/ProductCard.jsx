import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { IconButton } from "@mui/material";
import { GrFavorite } from "react-icons/gr";

export default function ProductCard({
  product,
  index = 0,
  onFavoriteToggle,
  isFavorite = false,
  onQuickAdd,
  onViewDetails,
  className = "",
}) {
  return (
    <Card
      className={className}
      sx={{
        width: "100%",
        minHeight: 260,
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 3,
        transition: "transform 0.3s",
        "&:hover": { transform: "translateY(-8px)" },
      }}
    >
      <CardActionArea className="group">
        <div className="relative">
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.name}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {product.badge && (
            <span className="absolute top-3 left-3 bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded font-medium">
              {product.badge}
            </span>
          )}

          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "white",
              color: "red",
              "&:hover": {
                bgcolor: "white",
                color: "darkred",
              },
              boxShadow: 1,
            }}
            onClick={() => onFavoriteToggle?.(product.id)}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            {isFavorite ? <GrFavorite /> : <GrFavorite />}
          </IconButton>
        </div>

        <CardContent className="p-4">
          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
            {"★".repeat(Math.floor(product.rating)) +
              "☆".repeat(5 - Math.floor(product.rating))}
            <span className="text-xs text-gray-500 ml-1">
              ({product.reviews})
            </span>
          </div>

          {/* Name */}
          <Typography
            className="font-semibold text-lg mb-1 transition-colors"
            variant="h5"
            component="div"
          >
            {product.name}
          </Typography>

          {/* Author */}
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            <b>Author</b>: {product.author || "Unknown"}
          </Typography>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-400">
                ₹ {product.price}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ₹ {product.originalPrice}
              </span>
            </div>
          </div>
        </CardContent>
      </CardActionArea>

      {/* Actions */}
      <CardActions className="flex justify-around">
        <Button
          size="medium"
          variant="contained"
          sx={{
            flex: 1,
            mr: 1,
            bgcolor: "#1E40AF",
            color: "#fff",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              bgcolor: "#1E3A8A",
            },
          }}
          onClick={() => onQuickAdd?.(product)}
        >
          Buy Now
        </Button>
        <Button
          size="medium"
          variant="outlined"
          sx={{
            flex: 1,
            ml: 1,
            borderColor: "#1E40AF",
            color: "#1E40AF",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              bgcolor: "#EFF6FF",
              borderColor: "#1E40AF",
            },
          }}
          onClick={() => onViewDetails?.(product)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
