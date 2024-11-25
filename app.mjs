import {Model, DataTypes} from 'sequelize';
import {DataTypes} from 'sequelize';

const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Customer = sequelize.define('Customer', {
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    zip_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    registration_date: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  });
  
  // Sync the model with the database
  sequelize.sync({ force: true }).then(() => {
    console.log("Customer table created!");
  });
  

  initializeDatabase();