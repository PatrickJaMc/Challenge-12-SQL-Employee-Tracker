const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'employeeTracker_db'
    },
    console.log(`Connected to the classlist_db database.`)
  );

    console.log('--------WELCOME TO EMPLOYEE DATABASE--------');
  function runSearch() {
    inquirer
      .prompt({
        name: "selection",
        type: "list",
        message: "What would you like to do?",
        choices: 
          [
              "View All Departments",
              "View All Roles",
              "View All Employees", 
              "Add Department",
              "Add Role",
              "Add Employee", 
              "Update Employee Role",
          ]
      })
      .then(function(answer) {
          console.log(answer);
        
        if (answer.selection === "View All Departments") {
          viewAllDepartments();
        }
        else if(answer.selection === "View All Roles") {
          viewAllRoles();
    
        } 
        else if(answer.selection === "View All Employees") {
          viewAllEmployees();
    
        }
        else if(answer.selection === "Add Department") {
          addDepartment();
    
        }
        else if(answer.selection === "Add Role") {
          addRole();
    
        }
        else if(answer.selection === "Add Employee") {
          addEmployee();
    
        }
        else if(answer.selection === "Update Employee Role") {
          updateEmployeeRole();
    
        }else{
          connection.end();
        }
      });
    };
  


    function viewAllDepartments(){
        db.query('SELECT department.name, department.id FROM department', function (err, results) {
          console.table(results);
          runSearch();
    });
 };

    function viewAllRoles(){
    db.query('SELECT role.id, role.title, role.salary, role.department_id, department.id, department.name FROM ROLE LEFT JOIN department ON role.department_id = department.id', function (err, results) {
      console.table(results);
      runSearch();
});
};

    function viewAllEmployees(){
  db.query('SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id, department.name FROM employee  LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id', function (err, results) {
    console.table(results);
    runSearch();
  });
};

function addDepartment(){
    inquirer
      .prompt({
      
        type: "input",
        message: "What is the name of the department?",
        name: "deptName"

    }).then(function(answer){

        db.query("INSERT INTO department (name) VALUES (?)", [answer.deptName] , function(err, results) {
            if (err) throw err;
            console.table(results)
            runSearch();
    });
});
};

// Add functionality to allow user to add a new department
function addDepartment(){
    db.query('', function (err, results){
        console.table(results);
        runSearch();
    });
};
// Add functionality to allow user to add a new role
function addRole(){
    db.query('', function (err, results){
        console.table(results);
        runSearch();
    });
};
// Add functionality to allow user to add a new employee
function addEmployee(){
    db.query('', function (err, results){
        console.table(results);
        runSearch();
    });
};
// Add functionality to allow user to update employee role
function updateEmployeeRole(){
    db.query('', function (err, results){
        console.table(results);
        runSearch();
    });
}

runSearch();