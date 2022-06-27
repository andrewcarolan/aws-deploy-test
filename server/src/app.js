const express = require("express");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 80;

app.use(cors());

const quotes = require("./routes/quotes");

app.use(express.static(path.join(__dirname, "../../client/build")));
app.use("/api/quotes", quotes);

app.get("*", (req, res) => {
  console.log("Accessed catch-all route.");
  res.sendFile("index.html", {
    root: path.join(__dirname, "../../client/build"),
  });
});

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
  console.log("static path: ", path.join(__dirname, "../../client/build"));
});
