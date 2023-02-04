const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officenumber) {
    super(name, id, email);

    this.officenumber = officenumber;

    this.role = "Manager";
  }
  getOfficeNum() {
    return this.officenumber;
  }
  getRole() {
    return this.role;
  }
}
module.exports = Manager;
