#!/usr/bin/env node
import { Command } from "commander";
import cfonts from "cfonts";
import readline from "readline";
import inquirer from "inquirer";
import install_dependencies from "./install_dependencies.js";
import copyFolder from "./copy_templates.js";
import run_in_localhost from "./run_in_localhost.js";
import fs from "fs-extra";
import path from "path";
import push_to_github_remote from "./push_to_github.js";
import checkAndInstall from "./check_install.js";
import os from "os";
import { execSync } from "child_process";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const program = new Command();

cfonts.say("Salt Design System", {
  font: "block", // define the font style
  align: "center", // center alignment
  colors: ["black", "green"], // gradient colors
  background: "transparent", // background color
  letterSpacing: 1, // letter spacing
  lineHeight: 1, // line height
  space: true, // adds a border between letters
  maxLength: "0", // max length of a line
});

program
  .version("1.0.0")
  .description(
    "A simple CLI tool to create a salt App using Salt Design System By J.P.Morgan Chase & Co."
  );
const platform = os.platform();
let installGitCommand = "choco install git -y";
let installGhCommand = "choco install gh -y";
switch (platform) {
  case "win32":
    installGitCommand = "choco install git -y";
    installGhCommand = "choco install gh -y";
    break;
  case "darwin":
    installGitCommand = "brew install git";
    installGhCommand = "brew install gh";
    break;
  case "linux":
    installGitCommand = "sudo apt-get update && sudo apt-get install -y git";
    installGhCommand = "sudo apt-get update && sudo apt-get install -y gh";
    break;
  default:
    console.error("Unsupported OS");
}
const questions = [
  {
    type: "input",
    name: "appName",
    message: "Please input the app Name",
    default: "salt_app",
    validate: (input) => {
      if (input.trim() === "") {
        return "App name cannot be empty. Please provide a valid app name.";
      }
      return true;
    },
    filter: (input) => input.trim() || "salt_app",
  },
  {
    type: "list",
    name: "template_choices",
    message: "Choose the templates that you need in your app",
    choices: [
      "Form",
      "AgGrid",
      "AppHeader",
      "Login",
      "Carousel",
      "Accordian",
      "Calender",
      "notification",
    ],
    default: "Form",
  },
  {
    type: "confirm",
    name: "push_to_github",
    message: "Do you want to push to github?",
    default: true,
  },
  {
    type: "input",
    name: "github_username",
    message: "Please input the github username..",
    when: (answers) => answers.push_to_github,
    validate: (input) => {
      if (input.trim() === "") {
        return "Github Username cannot be empty. Please provide your username";
      }
      return true;
    },
    filter: (input) => input.trim() || "",
  },
  {
    type: "password",
    name: "token",
    message:
      "Please input the github Personal Token(token should have the following access:\n1. repo:status\n2. repo_deployment\n3. public_repo\n4.repo:invite\n5.read:org(under admin:org)\n",
    mask: "*",
    when: (answers) => answers.push_to_github,
    validate: (input) => {
      if (input.trim() === "") {
        return "Github token cannot be empty. Please provide your personal token";
      }
      return true;
    },
    filter: (input) => input.trim() || "",
  },
  {
    type: "input",
    name: "github_repository_name",
    message: "Please input the repository name..",
    when: (answers) => answers.push_to_github,
    validate: (input) => {
      if (input.trim() === "") {
        return "Github repo name cannot be empty. Please provide the repo name";
      }
      return true;
    },
    filter: (input) => input.trim() || "",
  },
  {
    type: "list",
    name: "github_branch_name",
    message: "Please select the branch name..",
    choices: [
      "master",
      "develop",
      new inquirer.Separator(),
      "Custom Branch Name",
    ],
    default: "master",
    when: (answers) => answers.push_to_github,
  },
  {
    type: "input",
    name: "github_custom_branch_name",
    message: "Please input the branch name..",
    when: (answers) => answers.github_branch_name === "Custom Branch Name",
    validate: (input) => {
      if (input.trim() === "") {
        return "Branch name cannot be empty.Please provide branch name.";
      }
      return true;
    },
    filter: (input) => input.trim() || "develop",
  },
  {
    type: "input",
    name: "github_commitMessage",
    message: "Please give the commit message..",
    default: "Initial_Commit",
    when: (answers) => answers.push_to_github,
    filter: (input) => input.trim() || "Initial Commit",
  },
];
program
  .command("ask")
  .description("Please provide the information for the below questions")
  .action(() => {
    let responses = {};
    const askQuestion = async (index) => {
      await inquirer
        .prompt(questions)
        .then(async (answers) => {
          responses = answers;
          try {
            await install_dependencies(responses.appName);
            await copyFolder(responses.appName, responses.template_choices);

            // Logic to create or overwrite index.html in the public folder
            const publicPath = path.join(
              process.cwd(),
              responses.appName,
              "public",
              "index.html"
            );
            fs.ensureDirSync(
              path.join(process.cwd(), responses.appName, "public")
            );
            fs.writeFileSync(publicPath, content, "utf8");
            console.log(`index.html has been created in the public folder.`);

            if (responses.push_to_github) {
              checkAndInstall("git", installGitCommand, platform);
              checkAndInstall("gh", installGhCommand, platform);
              let content = `GITHUB_TOKEN=${responses.token}`;
              let envPath = process.cwd() + path.sep + ".env";
              fs.writeFile(envPath, content, "utf-8", (err) => {
                if (err) {
                  console.error(`Error writing to .env: ${err.message}`);
                  return;
                }
                console.log(
                  `Content has been successfully written to ${envPath}`
                );
              });
              await push_to_github_remote(
                responses.appName,
                responses.token,
                responses.github_username,
                responses.github_repository_name,
                responses.github_branch_name,
                responses.github_commitMessage
              );
            }
            await run_in_localhost(responses.appName);
          } catch (error) {
            console.log("Error : " + error.message);
          }
        })
        .catch((error) => {
          if (error.isTtyError) {
            console.log("ttyerror");
            // Prompt couldn't be rendered in the current environment
          } else {
            // Something else went wrong
            console.log(`Program has been terminated. ${error}`);
          }
        });
    };
    askQuestion(0);
  });
if (!process.argv.slice(2).length) {
  program.outputHelp();
  process.argv.push("ask");
}
program.parse(process.argv);
