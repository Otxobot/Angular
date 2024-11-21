let lname: string;

lname = "Santosh";

let newname = lname.toUpperCase();

console.log(newname);

let age: number;

age = 25;
age = 25.5;

let dob = "25";

let result = parseInt(dob);

let isValid: boolean = false;

console.log(isValid);

let empList: string[];

empList = ["hello", "good morning", "wasa"];

let numList: Array<number>;

numList = [1,2,3,4,5];

let newNum = numList[4];

let results = numList.filter((num)=> num > 2);

let emp = empList.find((emp)=> emp === "hello");

let sum = numList.reduce((acc, num) => acc + num);

console.log(results);
console.log(emp);
console.log(sum);

console.log("------Enums: ---------")

const enum Color {
    Red,
    Green,
    Blue
}

let a: Color = Color.Red;
let b: Color = Color.Green;
let c: Color = Color.Blue;

console.log("Red: " + a);
console.log("Green: " + b);
console.log("Blue: " + c);

console.log("------Tuples: ---------")

let swapNumbs: [number,number];

swapNumbs = [10, 20];

function swapNumbers (num1:number, num2:number) : [number, number] {
    return [num2, num1]
}

console.log("Before: ")
console.log(swapNumbs[0]);
console.log(swapNumbs[1]);

swapNumbs = swapNumbers(10, 20);

console.log("After: ")
console.log(swapNumbs[0]);
console.log(swapNumbs[1]);

console.log("------Any: ---------");

let department;

//I can set any to any data type, try to avoid any, always use the correct data type

department = "IT";
department = 10;
