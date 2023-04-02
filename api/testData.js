const { pool } = require("../database/db");

async function insertData() {
    const name = 'ilya';
    const color = 'blue';
    try {
        const res = await pool.query(
            "INSERT INTO TEST (name, color) VALUES ($1, $2)",
            [name, color]
        );
        console.log(`Added a shark with the name ${name}`);
    } catch (err) {
        console.error(err);
    }
}

async function getData() {
    try {
        const id = 1
        const res = await pool.query(
            "SELECT * FROM TEST WHERE id = $1",
            [id]
        )
    } catch (err) {
        console.error(err);
    }
}


module.exports = { insertData, getData };