// const main = require("./index.js");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //   getRole() {
  //     return "Employee";
  //   }

  getName() {
    console.log(`Name: ${this.name}`);
    return this.name;
  }

  getId() {
    console.log(`ID: ${this.id}`);
    return this.id;
  }

  getEmail() {
    console.log(`email: ${this.email}`);
    return this.email;
  }
}
module.exports = Employee;
