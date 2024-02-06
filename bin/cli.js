#!/usr/bin/env node
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const runCommand = command => {
  try {
    execSync(`${command}`, {stdio: 'inherit'});
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }

  return true;
}

const repoName = process.argv[2] || ".";
const gitCheckoutCommand = `git --git-dir=/dev/null clone https://github.com/bimapriaaditya/create-starterpack-src ${repoName}`;
const installDepsCommand = (repoName !== ".") ? `npm install` : `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

rl.question('Install javascript depedencies library right now? [Y/N]: ', (answer) => {
  if (answer.toLowerCase() === 'y') {
    console.log(`Installing depedencies for ${repoName}`);
    const installDeps = runCommand(installDepsCommand);
    if (!installDeps) process.exit(-1);

  } else if (answer.toLowerCase() === 'n') {
    console.log('Anda dapat melakukan npm install secara manual setelah clone.');
  } else {
    console.log('Invalid option');
  }

  rl.close();
  
  console.log(`Congratulations! You are ready for hack nasa!`);
  console.log(`cd ${repoName} && npm run style`);
});
