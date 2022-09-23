const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeRecord = new Intern("Gordon", 2, "gordon@gmail.com", testSchool);
    expect(employeeRecord.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeRecord = new Intern("Gordon", 2, "gordon@gmail.com", testSchool);
    expect(employeeRecord.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeRecord = new Intern("Gordon", 2, "gordon@gmail.com", "School Name");
    expect(employeeRecord.getRole()).toBe(returnValue);
});