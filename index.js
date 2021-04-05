const team = []
const Employee = require("./employee");
const Engineer = require("./engineer");
const Manager = require("./manager.test");
const Intern = require("./intern");

const inquirer = ("inquirer");
const fs = require("fs");

const intern = (remainingInfo) => {
    inquirer.prompt({message: "school?", "name": "first"})
    .then(({first, ...rest}))
},
const manager = (remainingInfo) => {
    inquirer.prompt({message: "Office Number:", "name": "first"})
    .then(({first, ...rest}))
}

function getInfo() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Employee Name",
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log("Enter a team member name you would like to add")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "name",
        message: "Employee Name",
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log("Enter a team member name you would like to add")
                return false;
            }
        }
    }])
}

