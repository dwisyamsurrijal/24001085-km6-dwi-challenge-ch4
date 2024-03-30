const express = require("express");
const router = express.Router();
const cartypes = require("./cartype");
const cars = require("./cars");

router.use("/cartypes", cartypes);
router.use("/cars", cars);

module.exports = router;
