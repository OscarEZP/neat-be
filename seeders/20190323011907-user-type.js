'use strict';
const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('userTypes', [{
        name: 'Arrendatario',
        slug: 'LESSEE',
        createdAt: moment().format('YYYY-MM-DD'),
        updatedAt: moment().format('YYYY-MM-DD')
      },
      {
        name: 'Propietario',
        slug: 'OWNER',
        createdAt: moment().format('YYYY-MM-DD'),
        updatedAt: moment().format('YYYY-MM-DD')
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('userTypes', [{
      name: 'Arrendatario',
      slug: 'LESSEE'
    }, {
      name: 'Propietario',
      slug: 'OWNER'
    }])
  }
};
