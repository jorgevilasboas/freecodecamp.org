function sumFibs(num) {
    var fib = [1]; // Initialize array!
    if (num === 1) {
        return 2;
    } else {
        for (var i = 1; i <= num;) {
            fib.push(i);
            i = fib[fib.length - 1] + fib[fib.length - 2];
        }
        sum = 0;
        for (var i = 0; i < fib.length; i++) {
            if (fib[i] % 2 != 0) {
                sum += fib[i];
            }
        }
        return sum;
    }
}

console.log(sumFibs(1));


/*

function oddNumbers(l, r) {
    for (var i = l; i<=r; i++){
        if (i % 2 != 0){
            console.log(i)           
        }
    }


}
console.log(oddNumbers(3,9));
*/