const core = require('@actions/core');
const github = require('@actions/github');
const npm = require('npm');

const run = async () => {
  try {
    // const token = process.env['GITHUB_TOKEN'] || 'bob'
    // if (!token) return

    npm.load({ save: true }, function () {
      npm.commands.update({ json: true }, function (err, data) {
        core.debug(`d: ${data}`);
        npm.commands.update(function (err, d) {
          console.log(d);
        });
      });
    });

    // exec('ncu', (err, stdout, stderr) => {
    //   if (err) {
    //     core.debug(`err: ${err}`)
    //     return;
    //   }

    //   // the *entire* stdout and stderr (buffered)
    //   core.debug(`stdout: ${stdout}`);
    //   core.debug(`stderr: ${stderr}`);
    // });

    // const octokit = new github.GitHub(token)

    // const prs = await octokit.pulls.list({ owner: 'iancrowther', per_page: 2 })

    // core.setOutput("bob", 'bob');
    // core.debug(`repos: ${repos}`)
    // core.setOutput("repos", `repos: ${JSON.stringify(repos, undefined, 2)}`);

    // // `who-to-greet` input defined in action metadata file
    // const nameToGreet = core.getInput('who-to-greet');
    // console.log(`Hello ${nameToGreet}!`);
    // const time = (new Date()).toTimeString();
    // core.setOutput("time", time);
    // // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2)
    // console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()

export default run