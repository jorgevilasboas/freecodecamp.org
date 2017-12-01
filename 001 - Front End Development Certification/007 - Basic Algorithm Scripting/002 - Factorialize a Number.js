function factorialize(num) {
    if (num == 0 || num == 1)
        return 1;
    var res = 1;
    for (var i = 1; i <= num; i++) {
        res *= i;
    }
    return res;
}

console.log(factorialize(5));