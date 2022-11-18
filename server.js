const mysql = require('mysql2')
const inquirer = require('inquirer')
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Root1234",
    database: "emp_db"
})

inquirer.prompt([{
    message: 'What would you like to do?',
    type: 'list',
    choices: [{ name: "Add Department", value: "add" },{ name: "Add Role", value: "add" },
    { name: "Add Employee", value: "add" }, { name: "View Departments", value: "view" },
    { name: "View Roles", value: "view" }, { name: "View Employees", value: "view" },
    { name: "Update a role", value: "update" },],
    name: 'Choice'
}])
.then(init=> {
    console.log(init)
    console.log(init.choice)
    switch(init.choice) {
        case 'Add Department':
        addDepartment()
        break
        case 'Add Role':
        addRole()
        break
        case 'Add Employee':
        addEmployee()
        break
        case 'View Departments':
        viewDepartments()
        break
        case 'View Roles':
        viewRoles()
        break
        case 'View Employees':
        viewEmployees()
        break
        case 'Update employee Role':
        updateRole()
        break



    }
})

const addDepartment = () => {
    console.log('add department')
    inquirer.prompt([{
        message: 'What is the name of new depatment?',
        type: 'input',
        name: 'name'
    }])
}
