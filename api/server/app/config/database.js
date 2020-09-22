const Sequelize = require("Sequelize");
const mysql = require("mysql2");

module.exports = db = new Sequelize("backstage", "robinDB", "S10732b54861!", {
  host: "localhost",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
