import Sequelize = require('sequelize');

import sequelize from '../util/db';

const User = sequelize.define('user', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  middle_name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ""
  },

  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone_number: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cid:{
    type: Sequelize.UUID,
    allowNull: false
  },
  rid:{
    type: Sequelize.UUID,
    allowNull: false
  }
  
});

// module.exports = User;
export default User;