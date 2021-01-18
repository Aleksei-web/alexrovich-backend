const express = require("express");
const License = require("../models/license");

const router = express.Router();

router.post("/license", async (req, res) => {
  try {
    const license = await new License(req.body);
    await license.save();
    console.log(license);
    res.json(license);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

router.post("/license/update/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const {
      inn,
      nameCompany,
      product,
      numberOfUsers,
      startDate,
      expiry,
      contactName,
      email,
      comment,
    } = req.body;

    const lisense = await License.findByIdAndUpdate(
      { _id: id },
      {
        inn,
        nameCompany,
        product,
        numberOfUsers,
        startDate,
        expiry,
        contactName,
        email,
        comment
      }
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

router.get("/license", async (req, res) => {
  try {
    const licensese = await License.find({});
    res.json(licensese);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

router.get("/license/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const licensee = await License.findById(id);
    res.json(licensee);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

module.exports = router;
