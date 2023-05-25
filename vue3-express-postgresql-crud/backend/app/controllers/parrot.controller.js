const db = require("../models");
const Parrot = db.parrots;
const Op = db.Sequelize.Op;

// Create and Save a new Parrot
exports.create = (req, res) => {
  // Validate request

  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Parrot
  const parrot = {
    name: req.body.name,
    age: req.body.age,
    color : req.body.color,
   sold: req.body.sold ? req.body.sold : false,
    datOfBringingToTheStore : req.body.datOfBringingToTheStore,
    areaOfOrigin: req.body.areaOfOrigin,
    gender : req.body.gender,
    sizeAtMaturity : req.body.sizeAtMaturity,
    specificFood : req.body.specificFood,
    canImitateOtherAnimals : req.body.canImitateOtherAnimals
  };

  // Save Parrot in the database
  Parrot.create(parrot)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Parrot."
      });
    });
};

// Retrieve all Parrots from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  let condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Parrot.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving parrots."
      });
    });
};

// Find a single Parrots with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Parrot.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Parrot with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Parrot with id=" + id
      });
    });
};

// Update a Parrots by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Parrot.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Parrot was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Parrot with id=${id}. Maybe Parrot was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Parrot with id=" + id
      });
    });
};

// Delete a Parrots with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Parrot.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Parrot was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Parrot with id=${id}. Maybe Parrot was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Parrot with id=" + id
      });
    });
};

// Delete all Parrots from the database.
exports.deleteAll = (req, res) => {
  Parrot.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Parrots were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all parrots."
      });
    });
};

// find all published Parrots
exports.findAllPublished = (req, res) => {
  Parrot.findAll({ where: { sold: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving parrots."
      });
    });
};
