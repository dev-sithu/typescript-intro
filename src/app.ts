// import person from './Person';

function combine(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return a.toString() + ' ' + b.toString();
    }
}

function printResult(msg: any): void {
    console.log(new Date() + ': ' + msg.toString());
}

// printResult(person.name);
// printResult(person.role);

const combinedNums = combine(10, 15);
printResult(combinedNums);

const combinedNames = combine('Takahiro', 'Kanki');
printResult(combinedNames);
