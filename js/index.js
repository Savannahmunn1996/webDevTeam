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

const managerQuestions = [
  {
    type: "input",
    message: "What is Manager Name?",
    name: "name",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Employee Id?",
    name: "id",

    validate: validateInput,
  },
  {
    type: "input",
    message: "Office Number?",
    name: "officeNumber",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Enter Email Please",
    name: "email",
    validate: validateInput,
  },
];

const managerAnswers = await.inquirer.prompt(managerQuestions);
const manager = new Manager(manageAnswers);


employees.push(manager);

//creating engineer
const createEngineer = async() =>{
    const engineerQuestions =[
        {
            type:"input",
            message:"What is Engineer Name?",
            name:"name",
            validate:validateInput,
        },
        {
        type:"input",
        message:"engineer id?",
        name:"id",
        validate:validateInput,
        },
        {
            type:"input",
            message:"What is Engineer email?",
            name:"email",
            validate:validateInput,
        },
        {
            type:"github",
            message:"What is the engineer github?",
            name:"github",
            validate:validateInput,
        }

    ];
    const engineerAnswers = await inquirer.prompt(engineerQuestions);
    const engineer = new Engineer(engineerAnswers);
    employees.push(engineer);

}


const createIntern = async() =>{

const internQuestions =[

{type:"input",
message:"What is Intern name?",
name:"name",
validate:validateInput,
},
{
    type:"input",
    message:"Intern id?",
    name:"id",
    validate:validateInput,
},
{
    type:"input",
    message:"What is Intern email?",
    name:"email",
    validate:validateInput,
},
{
    type:"input",
    message:"What is Intern school?",
    name:"school",
    validate:validateInput,
}
];
const internAnswers = await inquirer.prompt(internQuestions);
const intern = new intern(internAnswers);
employees.push(intern);

};

init();