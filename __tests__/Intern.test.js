const Intern = require('../lib/intern');

describe('Intern', () => {
    it('Should create a new intern object', () => {
        const intern = new Intern('Hector', 30, 'hnava@gmail.com', 'University of Denver');

        expect(intern.name).toEqual(expect.stringContaining('Hector'));
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toEqual(expect.stringContaining('hnava@gmail.com'));
        expect(intern.school).toEqual(expect.stringContaining('University of Denver'));
    });

    it('Should get the intern github username with getGithub() method', () => {
        const intern = new Intern('Hector', 30, 'hnava@gmail.com', 'University of Denver');

        expect(intern.getSchool()).toEqual('University of Denver');
    });

    it('Should get the intern role with getRole() method', () => {
        const intern = new Intern('Hector', 30, 'hnava@gmail.com', 'University of Denver');

        expect(intern.getRole()).toEqual('Intern');
    });
});
