const inquirer = require("inquirer");

const fs = require("fs");

const generateHTML = require("./generateHTML.js");

const Manager = require("./manager.js");
const Engineer = require("./engineer.js");
const Intern = require("./intern.js");
const employees = [];

let isTeamComplete = false;

const validateInput = (userInput) => {
  if (userInput === "") {
    return "You Have to Type Something In!";
  } else {
    return true;
  }
};

const init = async () => {
  await createManager();

  while (!isTeamComplete) {
    const employeeTypeQuestion = [
      {
        type: "list",
        message: "please select employee type:",
        name: "employeeType",
        choices: [
          { name: "Engineer", value: "Engineer", short: "Engineer" },
          { name: "Intern", value: "Intern", short: "Intern" },
          { name: "none", value: "none", short: "none" },
        ],
      },
    ];

    const { employeeType } = await inquirer.prompt(employeeTypeQuestion);

    if (employeeType === "none") {
      isTeamComplete = true;
    } else {
      if (employeeType === "Engineer") {
        await createEngineer();
      }
      if (employeeType === "Intern") {
        await createIntern();
      }
    }
  }
  const HTML = generateHTML(employees);
  fs.writeFileSync("team-profile.html", HTML, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("HTML file has been generated!");
    }
  });
};
