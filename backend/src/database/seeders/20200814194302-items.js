'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('items', [{
      id: 1,
      name: 'Fiji Water',
      points: 14
    },
    {
      id: 2,
      name: 'Campbell Soup',
      points: 23
    },
    {
      id: 3,
      name: 'First Aid Pouch',
      points: 10
    },
    {
      id: 4,
      name: 'AK47',
      points: 8
    }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('items', null, {});

  }
};
