function reverseString(str) {
    var arr = str.split('');
    console.log(arr);
    arr = arr.reverse();
    return arr.join('');
}

reverseString("hello");