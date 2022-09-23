// Include Manager.js component
const Manager = require("../lib/Manager");

// Unit Tests
test("Can create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeRecord = new Manager("Gordon", 2, "gordon@gmail.com", testOfficeNumber);
    expect(employeeRecord.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 2;
    const employeeRecord = new Manager("Gordon", 2, "gordon@gmail.com", testOfficeNumber);
    expect(employeeRecord.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeRecord = new Manager("Gordon", 2, "gordon@gmail.com", 2);
    expect(employeeRecord.getRole()).toBe(returnValue);
});