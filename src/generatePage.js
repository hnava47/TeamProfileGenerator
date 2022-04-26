const buildEngineerCard = require('./buildEngineerCard');
const buildInternCard = require('./buildInternCard');
const buildManagerCard = require('./buildManagerCard');

const buildPage = (cards) => {
    return `<!DOCTYPE html>
    <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        </head>
        <body>
          <div class="container py-3">
            <header>
              <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal">My Team</h1>
              </div>
            </header>

            <main>
              <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                ${cards}
              </div>
            </main>
          </div>
        </body>
    </html>`;
};

const generatePage = (team) => {
    let teamCards = '';

    team.forEach((employee) => {
        const role = employee.getRole();

        if (role === 'Manager') {
            teamCards += buildManagerCard(employee);
        } else if (role === 'Engineer') {
            teamCards += buildEngineerCard(employee);
        } else if (role === 'Intern') {
            teamCards += buildInternCard(employee);
        }

        teamCards += '\n'
    });

    return buildPage(teamCards);
};



module.exports = generatePage;
