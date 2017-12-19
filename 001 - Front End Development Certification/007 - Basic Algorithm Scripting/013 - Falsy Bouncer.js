function bouncer(arr) {
    var returnedArray = [];

    // Don't show a false ID to this bouncer.
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            returnedArray.push(arr[i]);
        }
    }
    return returnedArray;
}

bouncer([7, "ate", "", false, 9]);