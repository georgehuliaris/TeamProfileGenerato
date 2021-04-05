const Employee = require("./employee.js")
const inquirer = ("inquirer");

const intern = (remainingInfo) => {
    inquirer.prompt({message: "school?", "name": "first"})
    .then(({first, ...rest}))
},
const manager = (remainingInfo) => {
    inquirer.prompt({message: "Office Number:", "name": "first"})
    .then(({first, ...rest}))
}
