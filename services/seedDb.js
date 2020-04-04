const { Patient } = require("./db");

(async () => {
  await Patient.findOrCreate({
    where: { id: 1 },
    defaults: {
      name: "Patient 1",
      address: "Address 1",
      city: "City 1",
      state: "State 1",
      pincode: 111111,
    },
  });
  await Patient.findOrCreate({
    where: { id: 2 },
    defaults: {
      name: "Patient 2",
      address: "Address 2",
      city: "City 2",
      state: "State 2",
      pincode: 222222,
    },
  });
})();