import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(5000, () => {
  console.log("App running on port 5000");
});
