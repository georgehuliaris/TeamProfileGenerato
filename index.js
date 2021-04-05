const team = []
const Employee = require("./employee");
const Engineer = require("./engineer");
const Manager = require("./manager");
const Intern = require("./intern");

const inquirer = ("inquirer");
const fs = require("fs");


// const intern = (remainingInfo) => {
//     inquirer.prompt({message: "school?", "name": "first"})
//     .then(({first, ...rest}))
// },
// const manager = (remainingInfo) => {
//     inquirer.prompt({message: "Office Number:", "name": "first"})
//     .then(({first, ...rest}))
// }

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
        name: "email",
        message: "Email address",
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log("Enter a email address you would like to add")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "Employee id",
        message: "Employee id",
        validate: idInput => {
            if (idInput) {
                return true;
            }
            else {
                console.log("Enter a team member id you would like to add")
                return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "role",
        message: "Employee role",
        choices: [
            "Employee", 
            "Engineer", 
            "Manager", 
            "Intern"]
            }
])
.then(answer => {
    if (answer.role === "Engineer") {
        inquirer.prompt([{
            type: "input",
            name: "github",
            message: "Please enter your github credentials",
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log("Please enter github credentials")
                return false;
                }
            }
        }])
    }
})
.then(answer => {
    console.log(answer.github)
    const someEngineer = new Engineer(answer.name, answer.email, answer.id, answer.role, answer.github) 
    team.push(someEngineer);
    addMore() 
    
})
else if(answer.role === "Manager") {
    inquirer.prompt([{
        type: "input",
        name: "office",
        message: "Office Phone Number",
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log("Please enter office phone number")
            }return false;
        }
    }])
}
.then(answer => {
    console.log(answer.office)
    const someEngineer = new Manager(answer.name, answer.email, answer.id, answer.role, answer.office) 
    team.push(someManager);
    addMore() 
    
})
else if(answer.role === "Intern") {
    inquirer.prompt([{
        type: "input",
        name: "school",
        message: "School graduated from",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please enter school that intern graduated from")
            }return false;
        }
    }])
}
.then(answer => {
    console.log(answer.office)
    const someIntern = new Manager(answer.name, answer.email, answer.id, answer.role, answer.school) 
    team.push(someIntern);
    addMore() 
    
})
};





