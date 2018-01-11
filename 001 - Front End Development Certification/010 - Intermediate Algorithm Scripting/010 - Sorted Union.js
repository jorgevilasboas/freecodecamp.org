function uniteUnique(arr) {
    var array = [];
    console.log(arguments);
    for (var i = 0; i < arguments.length; i++) {
        arguments[i].forEach(element => {
            if (!array.includes(element)) {
                array.push(element);
            }
        });
    }
    return (array);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);