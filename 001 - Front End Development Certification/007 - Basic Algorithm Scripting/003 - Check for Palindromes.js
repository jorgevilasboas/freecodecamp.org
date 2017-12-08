function isAlphaNum(char) {
    if ((char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) || (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) {
        return true;
    } else {
        return false;
    }
}

function palindrome(str) {
    // Good luck!
    var arr = str.split('');
    var reversed = arr.reverse().join('');
    var removed = "";
    var removedReversed = "";


    for (var i = 0; i < str.length; i++) {
        if (isAlphaNum(str[i]))
            removed += str[i].toLowerCase();
    }

    for (var j = 0; j < reversed.length; j++) {
        if (isAlphaNum(reversed[j]))
            removedReversed += reversed[j].toLowerCase();
    }

    if (removed === removedReversed) {
        return true;
    } else {
        return false;
    }
}

//console.log(isAlphaNum("&ABC"));
var teste = "2_A3*3#A2";
console.log(palindrome(teste));