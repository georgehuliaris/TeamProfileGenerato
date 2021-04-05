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
