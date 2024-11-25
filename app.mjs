// Import the Sequelize library, which helps us work with databases in JavaScript.
// Also, import the "Model" and "DataTypes" for defining how our data should look.
import { Sequelize, Model, DataTypes } from 'sequelize';

// Import the configuration for environment variables (like database credentials) from a .env file.
import 'dotenv/config';

// Log the database name from the environment variables to make sure it's being read correctly.
console.log("process.env", process.env.DB_NAME);

// Create a connection to the database using Sequelize.
// We're using the database credentials (name, user, password) stored in environment variables.
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost', // This means the database is running on our local machine.
  dialect: 'mysql' // "mysql" is the type of database we're connecting to.
});

// Define a "Customer" model to represent the customers in our database.
// A model is like a blueprint that describes the structure of our data.
const Customer = sequelize.define('Customer', {
  // This is the unique ID for each customer. It increases automatically for every new customer.
  customer_id: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Makes this the main unique identifier for each customer.
    autoIncrement: true, // Automatically increases with each new customer.
  },

  // The customer's first name, which is required.
  first_name: {
    type: DataTypes.STRING(50), // A short text string, up to 50 characters.
    allowNull: false, // This means the first name cannot be left empty.
  },

  // The customer's last name, which is also required.
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  // The customer's email address, which must be unique.
  email: {
    type: DataTypes.STRING(100), // Up to 100 characters allowed for the email.
    allowNull: false, // The email cannot be left empty.
    unique: true, // No two customers can have the same email.
  },

  // The customer's phone number, which is optional.
  phone: {
    type: DataTypes.STRING(15),
    allowNull: true, // This means it can be left empty.
  },

  // The customer's address, which is optional.
  address: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },

  // The customer's city, which is optional.
  city: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },

  // The customer's state, which is optional.
  state: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },

  // The customer's ZIP code, which is optional.
  zip_code: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },

  // The date the customer registered. If no date is provided, it will use the current date.
  registration_date: {
    type: DataTypes.DATE, // This stores a date and time.
    defaultValue: Sequelize.NOW, // Automatically sets the current date and time.
  },
});

// Create the "Customer" table in the database based on the model definition.
// "force: true" means it will delete the existing table and create a new one every time.
sequelize.sync({ force: true }).then(() => {
  console.log("Customer table created!"); // Logs a message when the table is successfully created.
});

// Creating a new customer table in the database
  const store = await Customer.create({ 
    first_name: 'Clark kent',
    last_name: 'Kent',
    email: 'clarkkent@email.com',
    phone: '4183867890',
    address: '123 Metro St',
    city: 'New York',
  });




