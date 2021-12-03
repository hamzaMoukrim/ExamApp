const MachineModel = require("../models/Machine");

module.exports = async ({ nom, addressIP, systemExp }) => {
  try {
    let errors = [];

    if (!nom) errors.push("name is required");
    if (!addressIP) errors.push(" address IP is required ");
    if (!systemExp) errors.push(" system is required ");

    if (errors.length !== 0)
      return {
        status: false,
        errors,
      };

    if (errors.length === 0) {
      const machine = {
        nom,
        addressIP,
        systemExp,
      };

      return {
        status: true,
        machine,
      };
    } else {
      return {
        status: false,
        errors,
      };
    }
  } catch (e) {
    return {
      status: false,
      errors: [e.message],
    };
  }
};
