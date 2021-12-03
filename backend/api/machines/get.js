const express = require("express");
const router = express.Router();
const MachineModel = require("../../models/Machine");

router.get("", async (req, res) => {
  try {
    const machines = await MachineModel.find({});

    return res.json({
      status: true,
      machines: machines,
    });

    /********************************************************/
  } catch (e) {
    console.log(`Error in /machines/get, error: ${e.message}`, e);
    res.json({
      status: false,
      errors: [e.message],
    });
  }
});

module.exports = router;
