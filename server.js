const mysql = require('mysql2')
const inquirer = require('inquirer')
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Root1234",
    database: "emp_db"
})
const question = () => {
inquirer.prompt([{
    message: 'What would you like to do?',
    type: 'list',
    choices: ['Add Department','Add Role',
    'Add Employee','View Departments',
    'View Roles', 'View Employees',
    'Update a role', 'nothing'],
    name: 'choice'
}])
.then(init=> {
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
        case 'Nothing':
        console.log('next time')
        break
    }
})
}

const addDepartment = () => {
    // console.log('add department')
    inquirer.prompt([{
        message: 'What is the name of new depatment?',
        type: 'input',
        name: 'name',
    }])
    .then(department => {
        console.log(department)
        db.query('INSERT INTO departments SET ?', department, err=> {
            if(err) {console.log(err)}
        })
        console.log('department added')
        question()
    })
}

const addRole = () => {
    // console.log('add department')
    inquirer.prompt([{
        message: 'What is the title of new role?',
        type: 'input',
        name: 'title',
    },
    {
        message: 'What is the salary of new role?',
        type: 'input',
        name: 'salary',
    },
    {
        message: 'What is the id department of new role?',
        type: 'input',
        name: 'department_id',
    }])
    .then(department => {
        console.log(department)
        db.query('INSERT INTO departments SET ?', department, err=> {
            if(err) {console.log(err)}
        })
        console.log('department added!')
        question()
    })
    .then(department => {
        console.log(role)
        db.query('INSERT INTO roles SET ?', role, err=> {
            if(err) {console.log(err)}
        })
        console.log('role added')
        question()
    })
}

question()
