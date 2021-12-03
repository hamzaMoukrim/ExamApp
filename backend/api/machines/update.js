const express = require("express");
const router = express.Router();
const MachineModel = require("../../models/Machine");
const validation = require("../../validation/update");

router.post("/", async (req, res) => {
  try {
    const { machine, id } = req.body;

    const validateMachine = await validation(machine);

    /********************************************************/

    if (!validateMachine.status) {
      return res.json(validateMachine);
    }

    const findMachine = await MachineModel.findById(id);

    if (!findMachine) {
      return res.json({
        status: false,
        errors: [" An error happened"],
      });
    }

    findMachine.nom = machine.nom;
    findMachine.systemExp = machine.systemExp;
    findMachine.addressIP = machine.addressIP;

    const saveMachine = await findMachine.save();

    if (!saveMachine) {
      return res.json({
        status: false,
        errors: [" An error happened"],
      });
    }

    return res.json({
      status: true,
      messages: [" update machine succeed"],
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
