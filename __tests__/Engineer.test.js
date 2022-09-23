const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "GordonOrr";
    const employeeRecord = new Engineer("Gordon", 2, "gordon@gmail.com", testGithub);
    expect(employeeRecord.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "GordonOrr";
    const employeeRecord = new Engineer("Gordon", 2, "gordon@gmail.com", testGithub);
    expect(employeeRecord.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeRecord = new Engineer("Gordon", 2, "gordon@gmail.com", "GordonOrr");
    expect(employeeRecord.getRole()).toBe(returnValue);
});