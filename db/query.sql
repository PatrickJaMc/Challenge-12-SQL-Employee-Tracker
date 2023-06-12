
--View All Departments

select * from department;


--View All Roles

SELECT role.id, role.title, role.salary, role.department_id, department.id, department.name
FROM ROLE 
LEFT JOIN department ON role.department_id = department.id

--View  All Employees

SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id, department.name
FROM employee 
LEFT JOIN role ON employee.role_id = role.id 
LEFT JOIN department ON role.department_id = department.id