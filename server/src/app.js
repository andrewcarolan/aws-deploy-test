const express = require("express");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT ?? 8080;

app.use(cors());

const quotes = require("./routes/quotes");

app.use("/static", express.static(path.join(__dirname, "assets")));
app.use("/quotes", quotes);

app.get("/", (_, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
