module.exports = (sequelize, Sequelize) => {
  const Parrot = sequelize.define("parrot", {
    name: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.NUMERIC
    },
    color: {
          type: Sequelize.STRING
        },
    sold: {
      type: Sequelize.BOOLEAN
    },
     datOfBringingToTheStore: {
          type: Sequelize.STRING
        },
     areaOfOrigin: {
               type: Sequelize.STRING
             },
     gender: {
               type: Sequelize.STRING
             },
     sizeAtMaturity: {
               type: Sequelize.NUMERIC
             },
     specificFood: {
               type: Sequelize.STRING
             },
     canImitateOtherAnimals: {
               type: Sequelize.BOOLEAN
             }

  });

  return Parrot;
};
