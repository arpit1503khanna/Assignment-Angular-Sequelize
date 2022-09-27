import Sequelize = require('sequelize');

import sequelize from '../util/db';

const Role = sequelize.define('role', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  key: {
    type: Sequelize.ENUM('A', 'SA', 'S'),
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  
});

// module.exports = Role;
export default Role;