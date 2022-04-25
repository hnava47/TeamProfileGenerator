const Manager = require('../lib/manager');

describe('Manager', () => {
    it('Should create a new manager object', () => {
        const manager = new Manager('Hector', 30, 'hnava@gmail.com', 500);

        expect(manager.name).toEqual(expect.stringContaining('Hector'));
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toEqual(expect.stringContaining('hnava@gmail.com'));
        expect(manager.officeNumber).toEqual(expect.any(Number));
    });

    it('Should get the manager role with getRole() method', () => {
        const manager = new Manager('Hector', 30, 'hnava@gmail.com', 500);

        expect(manager.getRole()).toEqual('Manager');
    });
});
