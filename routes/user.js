const express = require("express");
const User = require("../models/user");
const License = require("../models/license");
const sha256 = require("sha256");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ name });
    console.log(user);
    if (user.password === sha256(password)) {
      res.json({ user: name });
    } else {
      res.json({ message: "Не верные данные!" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

router.post("/registr", async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await new User({ name, password: sha256(password) }).save();
    res.json(user);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

router.post("/search/filters", async (req, res) => {
  try {
    const { category, searchValue } = req.body;
    if (category === "nameCompany") {
      const licensee = await License.find({ nameCompany: searchValue });
      console.log(licensee);
      res.json(licensee);
    }
    if (category === "inn") {
      const licensee = await License.find({ inn: searchValue });
      console.log(licensee);
      res.json(licensee);
    }
    if (category === "contactName") {
      const licensee = await License.find({ contactName: searchValue });
      console.log(licensee);
      res.json(licensee);
    }
    if (category === "email") {
      const licensee = await License.find({ email: searchValue });
      console.log(licensee);
      res.json(licensee);
    } else {
      res.json((message = "Не валидные данный"));
    }
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
});

module.exports = router;
