SELECT first_name, last_name, title, salary
FROM employee
INNER JOIN role ON employee.role_id  = role.id;

