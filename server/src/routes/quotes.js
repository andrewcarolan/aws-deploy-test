const express = require("express");
const fs = require("fs");

const { getRandomItem } = require("../utils/array");

const DATABASE_PATH = "./data/db.json";
const data = JSON.parse(fs.readFileSync(DATABASE_PATH));

const { quotes } = data;

const router = express.Router();
router.use(express.json());

router.get("/", (_req, res) => {
  res.json(quotes);
});

router.post("/", (req, res) => {
  console.log(req.body);
});

router.get("/random", (_req, res) => {
  res.send(getRandomItem(quotes).text);
});

router.get("/:id", (req, res) => {
  let quote;

  try {
    quote = quotes.find(({ id }) => String(id) === req.params.id);
  } catch (error) {
    throw error;
  }

  res.send(quote.text);
});

module.exports = router;
