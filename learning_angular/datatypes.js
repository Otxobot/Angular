var lname;
lname = "Santosh";
var newname = lname.toUpperCase();
console.log(newname);
var age;
age = 25;
age = 25.5;
var dob = "25";
var result = parseInt(dob);
var isValid = false;
console.log(isValid);
var empList;
empList = ["hello", "good morning", "wasa"];
var numList;
numList = [1, 2, 3, 4, 5];
var newNum = numList[4];
var results = numList.filter(function (num) { return num > 2; });
var emp = empList.find(function (emp) { return emp === "hello"; });
var sum = numList.reduce(function (acc, num) { return acc + num; });
console.log(results);
console.log(emp);
console.log(sum);
console.log("------Enums: ---------");
var a = 0 /* Color.Red */;
var b = 1 /* Color.Green */;
var c = 2 /* Color.Blue */;
console.log("Red: " + a);
console.log("Green: " + b);
console.log("Blue: " + c);
console.log("------Tuples: ---------");
var swapNumbs;
swapNumbs = [10, 20];
function swapNumbers(num1, num2) {
    return [num2, num1];
}
console.log("Before: ");
console.log(swapNumbs[0]);
console.log(swapNumbs[1]);
swapNumbs = swapNumbers(10, 20);
console.log("After: ");
console.log(swapNumbs[0]);
console.log(swapNumbs[1]);
