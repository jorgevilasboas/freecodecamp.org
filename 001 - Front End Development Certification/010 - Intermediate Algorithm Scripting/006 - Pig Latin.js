function translatePigLatin(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    // Starts with vowel
    if (vowels.includes(str[0])) {
        return str + 'way';
    } else if (!vowels.includes(str[1])) {
        // Starts with 2 consoants
        return str.substr(2) + str[0] + str[1] + 'ay';
    } else {
        // Starts with 1 consoant
        return str.substr(1) + str[0] + 'ay';
    }
}

translatePigLatin("consonant");