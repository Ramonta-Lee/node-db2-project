const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  db("fruits")
    .then(fruits => {
      res.json(fruits);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve fruits" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("fruits")
    .where({ id })
    .first()
    .then(fruit => {
      res.json(fruit);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve fruit" });
    });
});

module.exports = router;
