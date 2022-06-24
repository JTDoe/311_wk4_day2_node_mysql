const mysql = require('mysql')

// require("dotenv").config();

// const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT} = process.env;

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "database-1.co1wacd4cjz1.us-east-1.rds.amazonaws.com",
        user: "admin",
        password: "Lauren67890!",
        database: "myFirstDatabase",
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;