import person from './Person';

console.log(person.name);
console.log(person.role);
console.log(person.group);

function add(a: any, b: any) {
    return a + b;
}

const num1 = '1';
const num2 = 2.5;

const result = add(num1, num2);
console.log(`${num1} + ${num2} = ${result}`);

// union type
function combine(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return a.toString() + ' ' + b.toString();
    }
}

const combinedNums = combine(10, 15);
printResult(combinedNums);

const combinedNames = combine('Takahiro', 'Kanki');
printResult(combinedNames);

function printResult(msg: any): void {
    console.log(new Date() + ': ' + msg.toString());
}

// unknown type
let userInput: unknown;
let userName: string;

userInput = 1;
userInput = 'Sithu';

if (typeof userInput === 'string') {
    userName = userInput;
}

// never type
function generateError(message: string, code: number): never {
    throw { message: message, erroCode: code };
}

// generateError('An error occurred!', 500);

// console.log(userName);
