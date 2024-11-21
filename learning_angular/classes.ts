class Employee {
    private id: number;
    protected name: string;
    address: string;

    get empId(): number {
        return this.id
    }

    set empId(id: number){
        this.id = id;
    }

    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id: number, name: string, address: string){
        this.id = id;
        this.name = name;
        this.address=address;
    }

    getNameWithAddress(): string {
        return `${this.name} lives on ${this.address}`
    }
}

let john = new Employee(1, "John", 'Highway 71');

console.log(john.empId);

john.empId = 100;

console.log(john.empId);


//Since this method is static, we can call it directly with the Employee class word
//Employee.getEmployeeCount();
console.log(Employee.getEmployeeCount());

class Manager extends Employee {

    constructor(id: number, name: string, address: string) {
        super(id, name, address)
    }

    override getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`;
    }
}

let mike = new Manager(2, "Mike", "Cherise Drive");

console.log(john.getNameWithAddress());
console.log(mike.getNameWithAddress());