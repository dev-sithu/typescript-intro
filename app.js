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
