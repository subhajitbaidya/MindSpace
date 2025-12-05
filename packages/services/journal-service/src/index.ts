import express from "express";

const app = express();
const PORT = 5003;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("welcome");
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
