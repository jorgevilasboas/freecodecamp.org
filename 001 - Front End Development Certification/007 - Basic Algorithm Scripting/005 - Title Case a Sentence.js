function camelCaseIt(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (i == 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }
    return result;
}

function titleCase(str) {
    var title = [];
    var arr = str.split(" ");
    arr.forEach(function (element) {
        title.push(camelCaseIt(element));
    });

    return title.join(" ");
}

console.log(titleCase("I'm a little tea pot"));