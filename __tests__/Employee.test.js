const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeRecord = new Employee();
    expect(typeof(employeeRecord)).toBe("object");
})

test("Testing name.", () => {
    const name = "Gordon";
    const employeeRecord = new Employee(name);
    expect(employeeRecord.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeRecord = new Employee("Gordon", id);
    expect(employeeRecord.id).toBe(id);
})

test("Testing email.", () => {
    const email = "gordon@gmail.com";
    const employeeRecord = new Employee("Gordon", 2, email);
    expect(employeeRecord.email).toBe(email);
})

test("Gets name through getName method.", () => {
    const testName = "Gordon";
    const employeeRecord = new Employee(testName);
    expect(employeeRecord.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 2;
    const employeeRecord = new Employee("Gordon", testID);
    expect(employeeRecord.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "gordon@gmail.com";
    const employeeRecord = new Employee("Gordon", 2, testEmail);
    expect(employeeRecord.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeRecord = new Employee("Gordon", 2, "gordon@gmail.com");
    expect(employeeRecord.getRole()).toBe(returnValue);
})