const express = require("express");
const router = express.Router();

router.use("/machines/add", require("./machines/add.js"));
router.use("/machines/get", require("./machines/get"));
router.use("/machines/update", require("./machines/changeEta"));
router.use("/machines/updateInfo", require("./machines/update"));

module.exports = router;
