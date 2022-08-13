"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = __importDefault(require("./Person"));
// console.log(num);
console.log(Person_1.default.name);
console.log(Person_1.default.role);
function add(a, b) {
    return a + b;
}
var num1 = '1';
var num2 = 2.5;
var result = add(num1, num2);
console.log(result);
// union type
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return a.toString() + ' ' + b.toString();
    }
}
var combinedNums = combine(10, 15);
printResult(combinedNums);
var combinedNames = combine('Takahiro', 'Kanki');
printResult(combinedNames);
function printResult(msg) {
    console.log(new Date() + ': ' + msg.toString());
}
// unknown type
var userInput;
var userName;
userInput = 1;
userInput = 'Sithu';
if (typeof userInput === 'string') {
    userName = userInput;
}
// never type
function generateError(message, code) {
    throw { message: message, erroCode: code };
}
generateError('An error occurred!', 500);
console.log(userName);
