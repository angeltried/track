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
        name: 'role_id',
    }])
    .then(role => {
        console.log(role)
        db.query('INSERT INTO roles SET ?', role, err=> {
            if(err) {console.log(err)}
        })
        console.log('role added')
        question()
    })
}
const addEmployee = () => {
    
    inquirer.prompt([{
        message: 'What is the first name of employee?',
        type: 'input',
        name: 'first_name',
    },
    {
        message: 'What is the last name of employee?',
        type: 'input',
        name: 'last_name',
    },
    {
        message: 'What is the role id of employee?',
        type: 'input',
        name: 'role_id',
    },
    {
        message: ' is the employee a manager',
        type: 'list',
        choices: ['yes', 'no'],
        name: ' managerBoolean'
    }
])
    .then(employee => {
        if (employee.managerBoolean === 'yes') {
            console.log('tried to add manager')
            delete employee.managerBoolean
            db.query('INSERT INTO departments SET ?', employee, err=> {
                if(err) {console.log(err)}
            })
            console.log('employee added!')
            question()


        }   else if (employee.managerBoolean === 'no') {
           inquirer.prompt([{
            message: 'what is id of manager of employee?',
            type: 'input',
            name: 'manager_id'
           }])
          
        }
        console.log(employee)
    })
}
  const updateRole = () => {
    inquirer.prompt([{
        message: 'what is d you want to update',
        type: 'input',
        name: 'id'
    },
    {
        message: 'what is id of role to update',
        type: 'input',
        name: 'role_id'
    }
])
    .then(employee => {
        
            let newRole = {
                role_id: employee.role_id
            } 
        
        db.query('UPDATE employees SET ? WHERE id = ${employee.id}', newRole, err=> {
            if(err) {console.log(err)}
        })
        console.log('employee update')
        question()
    })
  }

question()
