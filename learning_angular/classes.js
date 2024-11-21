var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Object.defineProperty(Employee.prototype, "empId", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Employee.getEmployeeCount = function () {
        return 50;
    };
    Employee.prototype.getNameWithAddress = function () {
        return "".concat(this.name, " lives on ").concat(this.address);
    };
    return Employee;
}());
var john = new Employee(1, "John", 'Highway 71');
console.log(john.empId);
john.empId = 100;
console.log(john.empId);
//Since this method is static, we can call it directly with the Employee class word
//Employee.getEmployeeCount();
console.log(Employee.getEmployeeCount());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, address) {
        return _super.call(this, id, name, address) || this;
    }
    Manager.prototype.getNameWithAddress = function () {
        return "".concat(this.name, " is a manager at ").concat(this.address);
    };
    return Manager;
}(Employee));
var mike = new Manager(2, "Mike", "Cherise Drive");
console.log(john.getNameWithAddress());
console.log(mike.getNameWithAddress());
