const core = require('@actions/core');
const github = require('@actions/github');
// const { Octokit } = require("@octokit/rest");

// const octokit = new Octokit();

const run = async () => {
  try {
    const token = process.env['GITHUB_TOKEN']
    if (!token) return

    const octokit = new github.GitHub(token)

    const repos = await octokit.repos.listForOrg({ org: "iancrowther", type: "public" })

    console.log(repos);
    core.setOutput("repos", repos);

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