const core = require('@actions/core');
const github = require('@actions/github');
// const { Octokit } = require("@octokit/rest");

// const octokit = new Octokit();

const run = async () => {
  try {
    core.setOutput("bob", 'bob');
    // const repoToken = core.getInput('repo-token');
    // console.log(`repoToken: ${repoToken}!`);

    const token = process.env['GITHUB_TOKEN']
    const t = process.env.GITHUB_TOKEN
    core.debug(`token: ${token} ${t}`)
    console.log(`token: ${token} ${t}`);

    core.setOutput("t", `${token} ${t}`);

    // if (!token) return

    const octokit = new github.GitHub(token)

    // console.log('oct', octokit);

    const repos = await octokit.repos.listForUser({ username: 'iancrowther' })

    core.debug(`repos: ${repos}`)
    core.setOutput("repos", `repos: ${JSON.stringify(repos, undefined, 2)}`);

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