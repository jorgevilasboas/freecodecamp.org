function getPair(element) {

    if (element == "G") {
        return ["G", "C"];
    } else if (element == "C") {
        return ["C", "G"];
    } else if (element == "A") {
        return ["A", "T"];
    } else if (element == "T") {
        return ["T", "A"];
    }
    return "";
}

function pairElement(str) {
    var array = [];
    for (var i = 0; i < str.length; i++) {
        array.push(getPair(str[i]));
    }

    return array;
}

console.log(pairElement("GCG"));