module.exports = app => {
  const parrots = require("../controllers/parrot.controller.js");

  let router = require("express").Router();

  // Create a new Parrot
  router.post("/", parrots.create);

  // Retrieve all Parrots
  router.get("/", parrots.findAll);



  // Retrieve a single Parrot with id
  router.get("/:id", parrots.findOne);

  // Update a Parrot with id
  router.put("/:id", parrots.update);

  // Delete a Parrot with id
  router.delete("/:id", parrots.delete);

  // Delete all Parrots
  router.delete("/", parrots.deleteAll);

  app.use("/api/parrots", router);
};
