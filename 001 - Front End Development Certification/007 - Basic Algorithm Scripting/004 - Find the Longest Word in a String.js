
function findLongestWord(str) {
    arr = str.split(" ");
    var max = 0;
    arr.forEach(function(element) {
        if (element.length > max) max = element.length;
    });
    console.log(max);
    
    return max;
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");
  