const Employee = require("./employee.js");
module.exports = class Engineer extends Employee {
    constructor(name, email, id, role, github) {
        super(name, email, id, role)
        this.github = github;
    }
}