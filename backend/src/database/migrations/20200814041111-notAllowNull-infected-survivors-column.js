'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('survivors', 'infected', {
      type: Sequelize.BOOLEAN,
      allowNull: false
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('survivors', 'infected', {
      type: Sequelize.BOOLEAN,
      allowNull: true
    })
  }
};
