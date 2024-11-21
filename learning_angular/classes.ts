import { Login, User } from './interface';

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
}

class Employee implements Login {
    private id: number;
    protected name: string;
    address: Address;

    get empId(): number {
        return this.id
    }

    set empId(id: number){
        this.id = id;
    }

    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id: number, name: string, address: Address){
        this.id = id;
        this.name = name;
        this.address=address;
    }

    login(): User {
        return {name: "John", id: 1, email: "john@gmail.com"}
    }

    getNameWithAddress(): string {
        return `${this.name} lives on ${this.address.city} ${this.address.street}`
    }
}

let john = new Employee(1, "John", {street: "ABC", city: "Bangalore", state: "Karnataka", pin: "56007"});

console.log(john.empId);

john.empId = 100;

console.log(john.empId);


//Since this method is static, we can call it directly with the Employee class word
//Employee.getEmployeeCount();
console.log(Employee.getEmployeeCount());

class Manager extends Employee {

    constructor(id: number, name: string, address: Address) {
        super(id, name, address)
    }

    override getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address.city} ${this.address.street}`;
    }
}

let mike = new Manager(2, "Mike", {street: "Oakland drive", city: "New York City", state: "New York", pin: "78912"});

console.log(john.getNameWithAddress());
console.log(mike.getNameWithAddress());