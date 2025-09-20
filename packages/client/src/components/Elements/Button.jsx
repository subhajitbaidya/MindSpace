import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GradientTextButton = styled(Button)(({ theme }) => ({
  background: "none",
  border: "none",
  padding: theme.spacing(1, 3),
  fontWeight: 600,
  fontSize: "1rem",
  textTransform: "none",
  backgroundImage: "linear-gradient(to right, #3b82f6, #8b5cf6)", // Tailwind blue-500 to purple-500
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  transition: "opacity 0.3s ease",

  "&:hover": {
    opacity: 0.8,
    background: "none",
    WebkitTextFillColor: "black",
    // Prevent MUI hover background
  },
}));
