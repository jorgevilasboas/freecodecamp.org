function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.forEach(function (element) {
        if (!arr2.includes(element)) {
            newArr.push(element);
        }
    });

    arr2.forEach(function (element) {
        if (!arr1.includes(element)) {
            newArr.push(element);
        }
    });
    // Same, same; but different.
    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));