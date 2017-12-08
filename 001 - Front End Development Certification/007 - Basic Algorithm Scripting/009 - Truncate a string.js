function truncateString(str, num) {
    if (num <= 3) {
        return str.substr(0, num) + '...';
    } else {
        if (str.length <= num) return str;
        return str.substr(0, num - 3) + "...";
    }
    // Clear out that junk in your trunk

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);