const { Pool } = require('pg');
require('dotenv').config();

/* const pool = new Pool({
    user: process.env.dbuser,
    database: process.env.database,
    password: process.env.dbpassword,
    port: process.env.dbport,
    host: process.env.dbhost,
}); */

const pool = new Pool({
    user: process.env.dbuser,
    database: process.env.database,
    password: process.env.dbpassword,
    port: process.env.dbport,
    host: process.env.dbhost,
});

module.exports = { pool };
