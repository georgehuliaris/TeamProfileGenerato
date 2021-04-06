const Employee = require("./employee.js");
module.exports = class Intern extends Employee {
    constructor(name, email, id, role, school) {
        super(name, email, id, role)
        this.school = school;
    }
}
// needs school 

