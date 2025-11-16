import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 8000;

app.get("/user", (req, res) => {
  res.json("User service running");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
