const Employee = require('../lib/employee');

describe('Employee', () => {
    it('Should create a new employee object', () => {
        const employee = new Employee('Hector', 30, 'hnava@gmail.com');

        expect(employee.name).toEqual(expect.stringContaining('Hector'));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.stringContaining('hnava@gmail.com'));
    });

    it('Should get the employee name with getName() method', () => {
        const employee = new Employee('Hector', 30, 'hnava@gmail.com');

        expect(employee.getName()).toEqual('Hector');
    });

    it('Should get employee id with getId() method', () => {
        const employee = new Employee('Hector', 30, 'hnava@gmail.com');

        expect(employee.getId()).toEqual(30);
    });

    it('Should get the employee email with getEmail() method', () => {
        const employee = new Employee('Hector', 30, 'hnava@gmail.com');

        expect(employee.getEmail()).toEqual('hnava@gmail.com');
    });
});
