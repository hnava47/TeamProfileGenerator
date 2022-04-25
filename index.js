const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let teamList = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter manager's name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter manager's ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email:"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter manager's office number:"
        }
    ]).then(managerDetails => {
        const { name, id, email, officeNumber } = managerDetails;
        const manager = new Manager(name, id, email, officeNumber);
        teamList.push(manager);
    });
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Select employee's role:",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: input => `Enter ${input.role}'s name:`
        },
        {
            type: 'input',
            name: 'id',
            message: input => `Enter ${input.role}'s ID:`
        },
        {
            type: 'input',
            name: 'email',
            message: input => `Enter ${input.role}'s email:`
        },
        {
            type: 'input',
            name: 'github',
            message: input => `Enter ${input.role}'s github username:`,
            when: input => input.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: input => `Enter ${input.role}'s school name:`,
            when: input => input.role === 'Intern'
        },
        {
            type: 'confirm',
            name: 'addTeamMember',
            message: 'Would you like to add another team member?',
            default: true
        }
    ]).then(employeeDetails => {
        let { role, name, id, email, github, school, addTeamMember } = employeeDetails;
        let employee = '';

        if (role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
        } else if (role === 'Intern') {
            employee = new Intern(name, id, email, school);
        }

        teamList.push(employee);

        if (addTeamMember) {
            return addEmployee();
        } else {
            return buildPage();
        }
    });
};

addManager()
    .then(addEmployee)
    .catch(error => console.log(error));
