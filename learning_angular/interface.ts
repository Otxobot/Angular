
export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

let user: User = {name: "John", id: 1, email: "john@gmail.com"};

interface Employees extends User {
    salary: number;
}

let employee: Employees = {name: "John", id: 1, email: "john@gmail.com", salary: 1000}

export interface Login {
    login(): User;
}

