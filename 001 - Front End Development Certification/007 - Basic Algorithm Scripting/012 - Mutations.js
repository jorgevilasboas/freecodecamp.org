function mutation(arr) {
    var word1 = arr[0];
    var word2 = arr[1];

    for (var i = 0; i < word2.length; i++) {
        if (word1.toLowerCase().indexOf(word2[i].toLowerCase()) == -1) {
            return false;
        }
    }

    return true;
}

mutation(["hello", "hey"]);


console.log(Boolean);