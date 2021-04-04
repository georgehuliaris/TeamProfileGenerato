const Employee = require("./Employee.js")
//{id: name: email:}

describe("Employee constructor" , () => {
    describe("Initialization", () => {

        it("can be an instance of the Employee Class", () => {
            expect(typeof new Employee().toBe("object");
        })
          
        it ("should have a name property", () => {
            const name = "Rachel";
            const newEmployee = new Employee(1, name, "email@email.com");

            expect(newEmployee.name).toBe(name)
        })
    })

    describe("getName function", () => {
        it ("should retrieve the name property's value of each instance of an employee", () => {
            const name = "Rachel";
            const newEmployee = new Employee(1, name, "email@email.com");
            expect(newEmployee.getName()).toBe(name);
        })
    })
})
