const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('Should create a new engineer object', () => {
        const engineer = new Engineer('Hector', 30, 'hnava@gmail.com', 'hnava');

        expect(engineer.name).toEqual(expect.stringContaining('Hector'));
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toEqual(expect.stringContaining('hnava@gmail.com'));
        expect(engineer.github).toEqual(expect.stringContaining('hnava'));
    });

    it('Should get the engineer github username with getGithub() method', () => {
        const engineer = new Engineer('Hector', 30, 'hnava@gmail.com', 'hnava');

        expect(engineer.getGithub()).toEqual('hnava');
    });

    it('Should get the engineer role with getRole() method', () => {
        const engineer = new Engineer('Hector', 30, 'hnava@gmail.com', 'hnava');

        expect(engineer.getRole()).toEqual('Engineer');
    });
});
