const Employee = require("./employee.js");

module.exports = class Manager extends Employee {
    constructor(name, email, id, role, office) {
        super(name, email, id, role)
        this.office = office;
    }
}
// needs office 

