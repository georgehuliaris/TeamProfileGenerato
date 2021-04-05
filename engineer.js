const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(name, email, id, role, github) {
        super(name, email, id, role)
        this.github - github
    }
    getGithub() {
        return this.github;
    }
}
// needs github 

module.exports = Engineer;