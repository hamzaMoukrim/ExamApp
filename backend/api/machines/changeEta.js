const express = require("express");
const router = express.Router();
const MachineModel = require("../../models/Machine");

router.post("", async (req, res) => {
  try {
    const { id } = req.body;

    const machine = await MachineModel.findById(id);

    if (!machine) {
      return res.json({
        status: false,
        errors: [" An error happened"],
      });
    }

    machine.etat = !machine.etat;

    const saveMachine = await machine.save();

    if (!saveMachine) {
      return res.json({
        status: false,
        errors: [" An error happened"],
      });
    }

    return res.json({
      status: true,
      messages: [" Change etat succeed"],
      machine: saveMachine,
    });

    /********************************************************/
  } catch (e) {
    console.log(`Error in /machines/change, error: ${e.message}`, e);
    res.json({
      status: false,
      errors: [e.message],
    });
  }
});

module.exports = router;
