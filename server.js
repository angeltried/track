//---DEPENDENCIES---//

const inquirer = require("inquirer");
const mysql = require("mysql");

//---CONNECTION---//

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employeee_db"
})

connection.connect(function (err) {
    if (err) throw err;

    console.log("connected as id " + connection.threadId + "\n");

    initialQuestion();
})

