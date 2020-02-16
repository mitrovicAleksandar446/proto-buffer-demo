const Schema = require('./compiled/protos/employees_pb');

const alex = new Schema.Employee();
alex.setId(1001);
alex.setName("Alex");
alex.setSalary(5000);

const frank = new Schema.Employee();
frank.setId(1002);
frank.setName("Frank");
frank.setSalary(6000);

const employees = new Schema.Employees();
employees.addEmployees(alex);
employees.addEmployees(frank);

const binary = employees.serializeBinary();
console.log(binary);
const deserializedEmployees = Schema.Employees.deserializeBinary(binary);
console.log(deserializedEmployees.toString());