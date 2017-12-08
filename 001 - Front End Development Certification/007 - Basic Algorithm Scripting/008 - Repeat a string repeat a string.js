function repeatStringNumTimes(str, num) {
    // repeat after me
    result = "";
    if (num <= 0) {
        return "";
    } else {
        for (var i = 0; i < num; i++) {
            result += str;
        }

    }
    return result;

}

repeatStringNumTimes("abc", 3);