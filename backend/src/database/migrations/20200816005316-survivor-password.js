'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('survivors', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('survivors', 'password')
  }
};
