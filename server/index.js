import express from "express";
const app = express();
const port = process.env.PORT || 12000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
