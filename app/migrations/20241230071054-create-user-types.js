// migrations/xxxxxx-create-user-types.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("UserTypes", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    // Add initial data (optional)
    await queryInterface.bulkInsert("UserTypes", [
      { name: "Admin", createdAt: new Date(), updatedAt: new Date() },
      { name: "User", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("UserTypes");
  },
};
