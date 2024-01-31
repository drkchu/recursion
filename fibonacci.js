let n = Number(process.argv[2]);

// Recursive approach
function fibs(num) {
    let result = [];
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1)
            result.push(i);
        else
            result.push(result[i-1] + result[i-2]);
    }
    return result;
}

function fibsRec(num) {
    if (num === 1)
        return [0];
    else if (num === 2)
        return [0, 1];
    else {
        let previousFibs = fibsRec(num - 1)
        return previousFibs.concat([previousFibs[previousFibs.length - 1] + previousFibs[previousFibs.length - 2]])
    }
}

console.log('\nCalculating the first n Fibonacci number iteratively: \n');
console.log(fibs(n))

console.log('\nCalculating the first n Fibonacci number recursively: \n');
console.log(fibsRec(n))