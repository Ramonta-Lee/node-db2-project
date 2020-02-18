const express = require("express");

const router = express.Router();

const db = require("../data/dbConfig.js");

router.get("/", (req, res) => {
  db.select("*")
    .from("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve cars" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("cars")
    .where({ id })
    .first()
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to retrieve Car" });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ error: "Failed to store data" });
    });
});

module.exports = router;
