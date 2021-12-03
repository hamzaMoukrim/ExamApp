const express = require("express");
const router = express.Router();
const MachineModel = require("../../models/Machine");
const validation = require("../../validation/add");

router.post("/", async (req, res) => {
  try {
    const machine = req.body;
    const validateMachine = await validation(machine);

    /********************************************************/

    if (!validateMachine.status) {
      return res.json(validateMachine);
    }

    const saveMachine = await MachineModel.create({
      ...validateMachine.machine,
    });

    if (!saveMachine) {
      return res.json({
        status: false,
        errors: [" An error happened"],
      });
    }

    return res.json({
      status: true,
      messages: [" add machine succeed"],
      user: saveMachine,
    });

    /********************************************************/
  } catch (e) {
    console.log(`Error in /machines/add, error: ${e.message}`, e);
    res.json({
      status: false,
      errors: [e.message],
    });
  }
});

module.exports = router;
