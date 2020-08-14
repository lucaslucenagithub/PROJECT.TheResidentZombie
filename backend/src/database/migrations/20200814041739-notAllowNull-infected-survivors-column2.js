'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('survivors', 'infected', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('survivors', 'infected', {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: null
    })
  }
};
