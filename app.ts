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
