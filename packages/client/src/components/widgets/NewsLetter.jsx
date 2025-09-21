import { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { Mail, Gift, Bell, Sparkles } from "lucide-react";
import { toast } from "react-toastify";
import Notification from "../../lib/Notification";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast("You've been subscribed to our newsletter. Welcome to TechVibe!");
      setEmail("");
    }
  };

  return (
    <Box sx={{ py: 10, bgcolor: "#f7f9fc", px: 2 }}>
      <Card
        elevation={6}
        sx={{ maxWidth: 700, mx: "auto", p: 4, borderRadius: 4 }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          {/* Icon */}
          <Box
            sx={{
              width: 64,
              height: 64,
              mx: "auto",
              mb: 3,
              bgcolor: "#e3f2fd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
            }}
          >
            <Mail size={28} color="#1976d2" />
          </Box>

          {/* Heading */}
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Stay in the Loop
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Get exclusive deals, product launches, and tech insights delivered
            to your inbox.
          </Typography>

          {/* Features */}
          <Grid container spacing={2} mb={4}>
            <Grid item xs={12} sm={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <Gift size={20} />
                <Typography variant="subtitle2">Exclusive Deals</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <Bell size={20} />
                <Typography variant="subtitle2">Early Access</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <Sparkles size={20} />
                <Typography variant="subtitle2">Tech Insights</Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Email Form */}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={8}>
                <TextField
                  type="email"
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </form>

          {/* Trust message */}
          <Typography
            variant="caption"
            color="text.secondary"
            mt={3}
            display="block"
          >
            Join 25,000+ subscribers. Unsubscribe anytime. No spam, ever.
          </Typography>
        </CardContent>
      </Card>
      <Notification />
    </Box>
  );
};

export default Newsletter;
