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

let results = numList.filter((num)=> num > 2);

let emp = empList.find((emp)=> emp === "hello");

let sum = numList.reduce((acc, num) => acc + num);

console.log(results);
console.log(emp);
console.log(sum);