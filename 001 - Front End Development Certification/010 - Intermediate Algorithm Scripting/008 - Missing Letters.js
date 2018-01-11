function fearNotLetter(str) {
    var array = str.split("");
    var start = str.charCodeAt(0);
    var end = str[str.length-1].charCodeAt(0);
    for (var i = start ; i < end; i++){
        if (!array.includes(String.fromCharCode(i))){
            return String.fromCharCode(i);
        }
    }
    return undefined;
}

fearNotLetter("abce");