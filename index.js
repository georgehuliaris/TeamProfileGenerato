const team = [];
const Employee = require("./employee");
const Engineer = require("./engineer");
const Manager = require("./manager");
const Intern = require("./intern");

const inquirer = require("inquirer");
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
    inquirer.prompt([
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
        name: "employeeId",
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
.then( res => {
    const role = res.role[0];

    switch (role) {
        case 'Engineer' : getEngineer(res); 
        break;
        case 'Manager' : getManager(res);
        break;
        case 'Intern' : getIntern(res);
        break;
        case 'Employee': buildHtml();
        break;
        default: 
        console.log(`error: must provide role`);
        getInfo();
    }
})
};

getInfo();


function getEngineer(employee) {
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
    .then(res => {
        console.log(res);
        const someEngineer = new Engineer(employee.name, employee.email, employee.employeeId, employee.role[0], res.github);
        team.push(someEngineer);
        console.log(team);  
    });
}
function getManager(employee) {
    inquirer.prompt([{
        type: "input",
        name: "office",
        message: "Please enter office phone number",
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log("Please enter office phone number")
            return false;
            }
        }
    }])
    .then(res => {
        console.log(res);
        const someManager = new Manager(employee.name, employee.email, employee.employeeId, employee.role[0], res.github);
        team.push(someManager);
        console.log(team);  
    });
}
function getIntern(employee) {
    inquirer.prompt([{
        type: "input",
        name: "school",
        message: "Please enter school name",
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log("Please enter school name")
            return false;
            }
        }
    }])
    .then(res => {
        console.log(res);
        const someIntern = new Manager(employee.name, employee.email, employee.employeeId, employee.role[0], res.github);
        team.push(someIntern);
        console.log(team);  
    });
}


// else if(answer.role === "Manager") {
//     inquirer.prompt([{
//         type: "input",
//         name: "office",
//         message: "Office Phone Number",
//         validate: officeInput => {
//             if (officeInput) {
//                 return true;
//             } else {
//                 console.log("Please enter office phone number")
//             }return false;
//         }
//     }])
// }
// .then(answer => {
//     console.log(answer.office)
//     const someEngineer = new Manager(answer.name, answer.email, answer.id, answer.role, answer.office) 
//     team.push(someManager);
//     addMore() 
    
// })
// else if(answer.role === "Intern") {
//     inquirer.prompt([{
//         type: "input",
//         name: "school",
//         message: "School graduated from",
//         validate: schoolInput => {
//             if (schoolInput) {
//                 return true;
//             } else {
//                 console.log("Please enter school that intern graduated from")
//             }return false;
//         }
//     }])
// }
// .then(answer => {
//     console.log(answer.school)
//     const someIntern = new Manager(answer.name, answer.email, answer.id, answer.role, answer.school) 
//     team.push(someIntern);
//     addMore() 
// })
// else{
//     const someEmployee = new Employee(answer.name, answer.email, answer.id, answer.role)
//     team.push(someEmployee)
//     addMore()
// }
// function addMore() {
//     inquirer.prompt([{
//         type: "confirm",
//         name: "addNew",
//         message: "Add another team member?"
//     }])
//     .then(res => {
//         if (res.addNew === true) {
//             getInfo(team)
//         }else{
//             console.log("team", team)
//             let theCardsHtml = generatePage(team)
//             wroteHTML(theCardsHtml)
//         }
//     })
// }
