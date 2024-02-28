const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

if(process.env.GITHUB_TOKEN){
    console.log("GITHUB_TOKEN:", process.env.GITHUB_TOKEN);
}

async function commentOnPR() {
  // Assuming you have the PR number and the repository details
  const prNumber = process.env.PR_NUMBER ? process.env.PR_NUMBER : 1;
  const owner = process.env.REPOSITORY_OWNER;
  const repo = process.env.REPOSITORY_NAME;

  const comment = `Comment "PR:${prNumber}, Owner:${owner}, repo:${repo}"`;

  try{
    await octokit.issues.createComment({
        owner,
        repo,
        issue_number: prNumber,
        body: comment,
      });  
  }catch(err){
    console.error(error); 
  }
}

commentOnPR().catch((error) => {
  console.error(error);
  process.exit(1);
});
