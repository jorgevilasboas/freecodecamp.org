function largestOfFour(arr) {
    result = [];
    // You can do this!
    arr.forEach(function (element) {
        var max = 0;
        element.forEach(function (subElement) {
            if (subElement > max) {
                max = subElement;
            }
        });
        result.push(max);
    });
    return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));