import Atomic from "../../assets/images/atomic.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { IconButton } from "@mui/material";

export default function ProductCard() {
  return (
    <Card
      sx={{
        width: "100%", // fill the flex item
        minHeight: 260,
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 3,
        transition: "transform 0.3s",
        "&:hover": { transform: "translateY(-8px)" },
      }}
    >
      <CardActionArea>
        <div className="relative">
          <CardMedia
            component="img"
            height="140"
            image={Atomic}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            alt="green iguana"
          />

          <span className="absolute top-3 left-3 bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded font-medium">
            Limited
          </span>

          <IconButton
            sx={{
              position: "absolute", // important
              top: 8, // spacing from top
              right: 8, // spacing from right
              bgcolor: "white",
              color: "red",
              "&:hover": {
                bgcolor: "white",
                color: "darkred",
              },
              boxShadow: 1,
            }}
          >
            ❤️
          </IconButton>
        </div>

        <CardContent className="p-4">
          <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
            ★★★★
            <span className="text-xs text-gray-500 ml-1">(400)</span>
          </div>
          <Typography
            className="font-semibold text-lg mb-1 transition-colors"
            variant="h5"
            component="div"
          >
            Atomic Habits
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            <b>Author</b>: James Clear
          </Typography>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-grey-400">₹ 200</span>

              <span className="text-sm text-gray-400 line-through">₹ 250</span>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className="flex justify-around">
        <Button
          size="medium"
          variant="contained"
          color="secondary"
          sx={{
            flex: 1, // takes half the width
            mr: 1,
            bgcolor: "#1E40AF", // deep blue
            color: "#fff",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              bgcolor: "#1E3A8A", // slightly darker on hover
            },
          }}
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
              bgcolor: "#EFF6FF", // light blue background on hover
              borderColor: "#1E40AF",
            },
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
